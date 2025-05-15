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

export let RenewITLayout: number[] = [
    125, 113, 101, 89, 77, 65, 53, 41, 42, 54, 66, 78, 90, 102, 114, 126, 6, 3, 5, 8, 4, 7, 13, 25,
    37, 49, 61, 73, 85, 97, 22, 34, 46, 58, 70, 82, 94, 106, 118, 130, 142,
];

export const MockAssetUIDS: string[] = [
    "7FQ9L2XGHB",
    "Q1M8CZ7RVE",
    "XK5PT6AWND",
    "JZ9RB4KMUY",
    "LMX3D2WQTC",
    "VRU68PEJYB",
    "T9H7KCAVQM",
    "WBZ1QXY64L",
];

export const mapGridToLocationName = (index: number): string => {
    return indexToLocationInfo.get(index)?.name ?? "";
};

export const getLocationInfo = (index: number): LocationInfo => {
    return indexToLocationInfo.get(index)!;
};
