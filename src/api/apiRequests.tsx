import { RelocatePalletProps } from "@/lib/types";
import LayoutData from "../../LocalDB/LayoutData.json";

export const GetLayoutData = ({ businessName }: { businessName: string }) => {
    businessName = businessName.toLowerCase();
    switch (businessName) {
        case "renewit":
            return LayoutData.RenewIT;
        default:
            console.error("Invalid business name:", businessName);
            return null;
    }
};

export const GetAllPalletData = () => {
    return fetch("http://localhost:3000/api/pallets").then((response) => response.json());
};

export const GetAllLocationData = () => {
    return fetch("http://localhost:3000/api/locations").then((response) => response.json());
};

export const RelocatePallet = async ({
    palletName,
    destinationRackLevel,
    destinationLocation,
}: RelocatePalletProps) => {
    try {
        const response = await fetch("http://localhost:3000/api/relocate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                palletName,
                destinationRackLevel,
                destinationLocation,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to relocate pallet");
        }

        const data = await response.json();
        console.log("Success:", data);
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
};
