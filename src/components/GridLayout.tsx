import { RenewITLayout, updateCellSize } from "@/lib/utils";
import { useEffect, useState } from "react";
import PalletList from "./PalletList";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import GridItem from "./GridItem";

type GridLayoutProps = {
    gridSize: number;
    selectedCells: number[];
    setSelectedCells?: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function GridLayout({ gridSize, selectedCells, setSelectedCells }: GridLayoutProps) {
    const [cellSize, setCellSize] = useState(36); // default

    useEffect(() => {
        setSelectedCells!(RenewITLayout);
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
                {Array.from({ length: gridSize * gridSize }).map((_, i) => {
                    const isSelected = selectedCells.includes(i);
                    return (
                        <Popover>
                            <PopoverTrigger>
                                <GridItem index={i} cellSize={cellSize} isSelected={isSelected} />
                            </PopoverTrigger>

                            {isSelected ? (
                                <PopoverContent>
                                    <PalletList index={i} />
                                </PopoverContent>
                            ) : null}
                        </Popover>
                    );
                })}
            </div>
        </div>
    );
}
