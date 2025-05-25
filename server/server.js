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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
