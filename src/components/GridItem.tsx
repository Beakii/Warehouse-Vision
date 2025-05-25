import { GridItemProps } from "@/lib/types";
import IsOccupiedIndicator from "./IsOccupiedIndicator";

const GridItem = ({ gridIndex, cellSize, isSelected, locationData, palletData }: GridItemProps) => {
    return (
        <div
            key={gridIndex}
            style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
            }}
            className={`flex flex-col justify-end
                    ${isSelected ? "cursor-pointer bg-blue-500" : "bg-slate-600 border-none"}`}
        >
            {isSelected ? locationData?.find((loc) => loc.gridIndex === gridIndex)?.location : null}

            {Array.from({ length: 3 }).map((_, i) => {
                const rackLocation = locationData?.find((loc) => loc.gridIndex === gridIndex);
                const pallet = palletData?.find(
                    (p) => p.location === rackLocation?.location && p.rackLevel === i + 1
                );
                const isOccupied = pallet ? pallet.palletName !== null : false;

                return (
                    <IsOccupiedIndicator key={i} isSelected={isSelected} isOccupied={isOccupied} />
                );
            })}
        </div>
    );
};
export default GridItem;
