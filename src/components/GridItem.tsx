import { mapGridToLocationName } from "@/lib/utils";
import IsOccupiedIndicator from "./IsOccupiedIndicator";

type GridItemProps = {
    cellSize: number;
    index: number;
    isSelected: boolean;
    palletLocations: {
        location: string;
        level: { palletName: string }[];
    }[];
};
const GridItem = ({ index, cellSize, isSelected, palletLocations }: GridItemProps) => {
    return (
        <div
            key={index}
            style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
            }}
            className={`flex flex-col justify-between md:text-lg lg:text-2xl xl:text-3xl content-center border-2 border-black transition-colors duration-200 
                    ${isSelected ? "cursor-pointer bg-blue-500" : "bg-slate-600 border-none"}`}
        >
            {isSelected ? mapGridToLocationName(index) : null}
            {Array.from({ length: 3 }).map((_, i) => {
                const rack = palletLocations.find(
                    (loc) => loc.location === mapGridToLocationName(index)
                );
                const pallet = rack?.level[i];
                const isOccupied = pallet && pallet.palletName ? true : false;
                return (
                    <IsOccupiedIndicator key={i} isSelected={isSelected} isOccupied={isOccupied} />
                );
            })}
        </div>
    );
};
export default GridItem;
