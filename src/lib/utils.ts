import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type LocationInfo = {
    name: string;
    levels: number;
};
const indexToLocationInfo = new Map<number, LocationInfo>([
    // Right Wall
    [142, { name: "AB", levels: 3 }],
    [130, { name: "AA", levels: 3 }],
    [118, { name: "BB", levels: 3 }],
    [106, { name: "BA", levels: 3 }],
    [94, { name: "CB", levels: 3 }],
    [82, { name: "CA", levels: 3 }],
    [70, { name: "DB", levels: 3 }],
    [58, { name: "DA", levels: 3 }],
    [46, { name: "EB", levels: 3 }],
    [34, { name: "EA", levels: 3 }],
    [22, { name: "FA", levels: 3 }],

    // Top Wall
    [8, { name: "GB", levels: 3 }],
    [7, { name: "GA", levels: 3 }],
    [6, { name: "HB", levels: 3 }],
    [5, { name: "HA", levels: 3 }],
    [4, { name: "IB", levels: 3 }],
    [3, { name: "IA", levels: 3 }],

    // Left Wall
    [13, { name: "JB", levels: 3 }],
    [25, { name: "JA", levels: 3 }],
    [37, { name: "KB", levels: 3 }],
    [49, { name: "KA", levels: 3 }],
    [61, { name: "LB", levels: 3 }],
    [73, { name: "LA", levels: 3 }],
    [85, { name: "MB", levels: 3 }],
    [97, { name: "MA", levels: 3 }],

    // Center Left
    [41, { name: "NA", levels: 3 }],
    [53, { name: "NV", levels: 3 }],
    [65, { name: "OA", levels: 3 }],
    [77, { name: "OB", levels: 3 }],
    [89, { name: "PA", levels: 3 }],
    [101, { name: "PB", levels: 3 }],
    [113, { name: "QA", levels: 3 }],
    [125, { name: "QB", levels: 3 }],

    // Center Right
    [42, { name: "UB", levels: 3 }],
    [54, { name: "UA", levels: 3 }],
    [66, { name: "TB", levels: 3 }],
    [78, { name: "TA", levels: 3 }],
    [90, { name: "SB", levels: 3 }],
    [102, { name: "SA", levels: 3 }],
    [114, { name: "RB", levels: 3 }],
    [126, { name: "RA", levels: 3 }],
]);

type UpdateCellsInterface = {
    gridSize: number;
    setCellSize: React.Dispatch<React.SetStateAction<number>>;
};
export const updateCellSize = ({ gridSize, setCellSize }: UpdateCellsInterface) => {
    const padding = 100; // for some spacing around the grid
    const maxWidth = window.innerWidth - padding;
    const maxHeight = window.innerHeight - padding;
    const dimension = Math.min(maxWidth, maxHeight);
    const newCellSize = Math.floor(dimension / gridSize);
    setCellSize(newCellSize);
};

export const RenewITLayout: number[] = [
    125, 113, 101, 89, 77, 65, 53, 41, 42, 54, 66, 78, 90, 102, 114, 126, 6, 3, 5, 8, 4, 7, 13, 25,
    37, 49, 61, 73, 85, 97, 22, 34, 46, 58, 70, 82, 94, 106, 118, 130, 142,
];

type PalletLocations = {
    location: string;
    level: string[];
};
export const PalletLocations = [
    {
        location: "AB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "AA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "BB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "BA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "CB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "CA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "DB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "DA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "EB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "EA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "FA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "GB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "GA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "HB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "HA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "IB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "IA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "JB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "JA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "KB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "KA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "LB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "LA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "MB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "MA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "NA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "NV",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "OA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "OB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "PA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "PB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "QA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "QB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "UB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "UA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "TB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "TA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "SB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "SA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "RB",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
    {
        location: "RA",
        level: [{ palletName: "DP-2306" }, { palletName: "DP-2306" }, { palletName: "DP-2306" }],
    },
];

export const mapGridToLocationName = (index: number): string => {
    return indexToLocationInfo.get(index)?.name ?? "";
};

export const getLocationInfo = (index: number): LocationInfo => {
    return indexToLocationInfo.get(index)!;
};
