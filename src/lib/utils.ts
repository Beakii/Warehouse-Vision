import { GetRackingLocationData } from "@/api/apiRequests";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LocationInfo, UpdateCellsInterface } from "./types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const indexToLocationInfo = GetRackingLocationData();

export const updateCellSize = ({ gridSize, setCellSize }: UpdateCellsInterface) => {
    const padding = 100; // for some spacing around the grid
    const maxWidth = window.innerWidth - padding;
    const maxHeight = window.innerHeight - padding;
    const dimension = Math.min(maxWidth, maxHeight);
    const newCellSize = Math.floor(dimension / gridSize);
    setCellSize(newCellSize);
};

export const mapGridToLocationName = (index: number): string => {
    return indexToLocationInfo.get(index)?.name ?? "";
};

export const getLocationInfo = (index: number): LocationInfo => {
    return indexToLocationInfo.get(index)!;
};
