import { updateCellSize } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import GridItem from "./GridItem";
import PalletList from "./PalletList";
import { GridLayoutProps } from "@/lib/types";

const GridLayout = ({ gridSize, selectedCells, locationData, palletData }: GridLayoutProps) => {
    const [cellSize, setCellSize] = useState<number>(34); // mobile default

    useEffect(() => {
        updateCellSize({ gridSize, setCellSize });
        const handleResize = () => updateCellSize({ gridSize, setCellSize });
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [gridSize]);

    return (
        <div className="flex justify-center items-center h-[calc(100vh-56px)] px-2 sm:px-4">
            <div
                className="grid gap-[2px] sm:gap-1 border border-dashed border-gray-300 m-1 lg:m-5"
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
                }}
            >
                {Array.from({ length: gridSize * gridSize }).map((_, i) => {
                    const gridIndex = i;
                    const isSelected = selectedCells.includes(gridIndex);
                    return (
                        <Popover key={gridIndex}>
                            <PopoverTrigger>
                                <GridItem
                                    gridIndex={gridIndex}
                                    cellSize={cellSize}
                                    isSelected={isSelected}
                                    locationData={locationData!}
                                    palletData={palletData!}
                                />
                            </PopoverTrigger>

                            {isSelected && (
                                <PopoverContent className="z-50 max-w-xs sm:max-w-sm">
                                    <PalletList
                                        gridIndex={gridIndex}
                                        locationData={locationData!}
                                        palletData={palletData!}
                                    />
                                </PopoverContent>
                            )}
                        </Popover>
                    );
                })}
            </div>
        </div>
    );
};

export default GridLayout;
