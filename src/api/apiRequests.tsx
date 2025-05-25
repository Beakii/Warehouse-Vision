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

export const RelocatePallet = ({ palletName }: RelocatePalletProps) => {
    console.log("RelocatePallet function called: ", palletName);
};
