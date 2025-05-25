import { cn } from "@/lib/utils";
import PalletCard from "./PalletCard";
import { PalletListProps } from "@/lib/types";

const PalletList = ({ gridIndex, className, locationData, palletData }: PalletListProps) => {
    const rackLocation =
        gridIndex !== undefined ? locationData?.find((loc) => loc.gridIndex === gridIndex) : null;

    const allocatedPallets = rackLocation
        ? palletData?.filter((p) => p.location === rackLocation.location)
        : [];

    const unallocatedPallets = !rackLocation ? palletData?.filter((p) => !p.location) : [];

    return (
        <div className={cn("h-full px-2 py-4", className)}>
            <h2 className={`${gridIndex ? `text-black` : `text-white`} text-lg font-semibold mb-2`}>
                {gridIndex
                    ? "Rack " + locationData?.find((loc) => loc.gridIndex === gridIndex)?.location
                    : "Unallocated Pallets"}
            </h2>

            <div className="space-y-2">
                {(rackLocation ? allocatedPallets : unallocatedPallets).map((pallet, i) => (
                    <PalletCard
                        key={pallet.id}
                        palletName={pallet.palletName}
                        rackLocation={rackLocation?.location || "Unallocated"}
                        loopIndex={pallet.rackLevel ? pallet.rackLevel - 1 : i}
                        isEmpty={!pallet.location}
                        locationOptions={locationData.map((loc) => loc.location)}
                        locationData={locationData}
                        palletData={palletData}
                        className="w-full"
                    />
                ))}
            </div>
        </div>
    );
};

export default PalletList;
