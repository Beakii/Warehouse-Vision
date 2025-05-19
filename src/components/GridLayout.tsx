import { updateCellSize } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { GetLayoutData, GetPalletLocationData } from "@/api/apiRequests";
import GridItem from "./GridItem";
import PalletList from "./PalletList";
import { GridLayoutProps } from "@/lib/types";

export default function GridLayout({ gridSize, selectedCells, setSelectedCells }: GridLayoutProps) {
    const [cellSize, setCellSize] = useState(36); // default
    const PalletLocations = GetPalletLocationData();

    //Runs once on mount to set the initial cell size
    useEffect(() => {
        const layoutData = GetLayoutData({ businessName: "renewit" });
        if (layoutData) {
            setSelectedCells!(layoutData);
        }
    }, []);

    //Runs on mount and on resize to set the cell size
    useEffect(() => {
        updateCellSize({ gridSize, setCellSize });
        const handleResize = () => updateCellSize({ gridSize, setCellSize });
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [gridSize]);

    return (
        <div className="flex justify-center items-center" style={{ height: "calc(100vh - 56px)" }}>
            <div
                className="grid gap-1 m-5 border border-dashed"
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
                }}
            >
                {Array.from({ length: gridSize * gridSize }).map((_, gridNumberIndex) => {
                    const isSelected = selectedCells.includes(gridNumberIndex);
                    return (
                        <Popover key={gridNumberIndex}>
                            <PopoverTrigger>
                                <GridItem
                                    index={gridNumberIndex}
                                    cellSize={cellSize}
                                    isSelected={isSelected}
                                    palletLocations={PalletLocations}
                                />
                            </PopoverTrigger>

                            {isSelected ? (
                                <PopoverContent>
                                    <PalletList gridNumberIndex={gridNumberIndex} />
                                </PopoverContent>
                            ) : null}
                        </Popover>
                    );
                })}
            </div>
        </div>
    );
}
