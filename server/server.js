import express from "express";
import cors from "cors";
import pkg from "pg";
import dotenv from "dotenv";
import { rackCodeToIndexOrCode } from "./utils.js";

dotenv.config();
const { Pool } = pkg;
const app = express();
app.use(cors());
const pool = new Pool({
    connectionString: process.env.DB_CONN,
    ssl: {
        rejectUnauthorized: false,
    },
});
app.use(express.json());

// Get All Pallets Data
app.get("/api/pallets/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM pallets");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching locations:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get Pallet Info by Rack Location and Level
app.get("/api/pallets/:rackLocation/:level", async (req, res) => {
    const { rackLocation, level } = req.params;
    const rackIndex = rackCodeToIndexOrCode(rackLocation);
    try {
        const result = await pool.query(
            `
            SELECT pallets.*
            FROM pallets
            JOIN locations ON pallets.locationId = locations.id
            WHERE locations.id = ${rackIndex} AND pallets.levelIndex = ${level}`
        );
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching pallets:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get All Location Data
app.get("/api/locations/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM locations");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching locations:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/api/relocate", async (req, res) => {
    const { palletName, destinationLocation, destinationRackLevel } = req.body;

    try {
        const result = await pool.query(
            `
            UPDATE pallets
            SET "location" = $1, "rackLevel" = $2
            WHERE "palletName" = $3
            RETURNING *
            `,
            [destinationLocation, destinationRackLevel, palletName]
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Pallet not found" });
        }
        res.json({ message: "Pallet relocated successfully", pallet: result.rows[0] });
    } catch (error) {
        console.error("Error relocating pallet:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
