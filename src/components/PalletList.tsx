import { cn, getLocationInfo, mapGridToLocationName } from "@/lib/utils";
import { GetPalletByRackLocation } from "@/api/apiRequests";
import PalletCard from "./PalletCard";
import { PalletListProps } from "@/lib/types";

const PalletList = ({ gridNumberIndex, className }: PalletListProps) => {
    const location = getLocationInfo(gridNumberIndex!);

    return (
  <div className={cn("h-full px-2 py-4", className)}>
    <h2 className="text-white text-lg font-semibold mb-2">
      {gridNumberIndex
        ? "Rack " + mapGridToLocationName(gridNumberIndex)
        : "Unallocated Pallets"}
    </h2>

    <div className="space-y-2">
      {[...Array(gridNumberIndex ? location.levels : 10)].map((_, i) => {
        return gridNumberIndex ? (
          GetPalletByRackLocation({
            loopIndex: i,
            gridNumberIndex: gridNumberIndex,
            rackLocation: mapGridToLocationName(gridNumberIndex),
          })
        ) : (
          <PalletCard
            isEmpty
            loopIndex={i}
            palletName="Test"
            rackLocation=""
            key={i}
          />
        );
      })}
    </div>
  </div>
    );
};

export default PalletList;
