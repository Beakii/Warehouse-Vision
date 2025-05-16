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

    if (!rack) {
        console.error("Rack not found for location:", rackLocation);
        return null;
    }

    const pallet = rack.level[loopIndex];

    if (!pallet) {
        console.error("Pallet not found at level:", loopIndex, "in location:", rackLocation);
        return null;
    }

    return (
        <PalletCard key={loopIndex} palletName={pallet.palletName} rackLocation={rackLocation} />
    );
};

// type RelocatePalletProps = {
//     fromLocation: string;
//     toLocation: string;
//     palletId: string;
// };
// export const RelocatePallet = ({ fromLocation, toLocation, palletId }: RelocatePalletProps) => {
//     console.log();
// };
