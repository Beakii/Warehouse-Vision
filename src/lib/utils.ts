import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { UpdateCellsInterface } from "./types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const updateCellSize = ({ gridSize, setCellSize }: UpdateCellsInterface) => {
    const padding = 100; // for some spacing around the grid
    const maxWidth = window.innerWidth - padding;
    const maxHeight = window.innerHeight - padding;
    const dimension = Math.min(maxWidth, maxHeight);
    const newCellSize = Math.floor(dimension / gridSize);
    setCellSize(newCellSize);
};
