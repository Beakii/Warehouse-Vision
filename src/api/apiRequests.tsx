import PalletCard from "@/components/PalletCard";
import { PalletLocations } from "@/lib/utils";

type GetPalletByRackLocationProps = {
    rackLocation: string;
    gridNumberIndex: number;
    loopIndex: number;
};
export const GetPalletByRackLocation = ({
    rackLocation,
    loopIndex,
}: GetPalletByRackLocationProps) => {
    const rack = PalletLocations.find((loc) => loc.location === rackLocation);
    let isEmpty = false;

    if (!rack) {
        console.error("Rack not found for location:", rackLocation);
        return null;
    }

    const pallet = rack.level[loopIndex];
    if (!pallet || !pallet.palletName) {
        isEmpty = true;
    }

    return (
        <PalletCard
            key={loopIndex}
            palletName={pallet.palletName}
            rackLocation={rackLocation}
            loopIndex={loopIndex}
            isEmpty={isEmpty}
        />
    );
};
