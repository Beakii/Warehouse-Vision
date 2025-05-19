import PalletCard from "@/components/PalletCard";
import PalletLocations from "../../LocalDB/PalletLocations.json";
import locationData from "../../LocalDB/GridToNameMap.json";
import LayoutData from "../../LocalDB/LayoutData.json";
import { GetPalletByRackLocationProps, LocationInfo } from "@/lib/types";

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

export const GetRackingLocationData = () => {
    const indexToLocationInfo = new Map<number, LocationInfo>(
        Object.entries(locationData).map(([key, value]) => [Number(key), value])
    );

    return indexToLocationInfo;
};

export const GetLayoutData = ({ businessName }: { businessName: string }) => {
    businessName = businessName.toLowerCase();
    switch (businessName) {
        case "renewit":
            return LayoutData.RenewIT;
        default:
            console.error("Invalid business name:", businessName);
            return null;
    }
};

export const GetPalletLocationData = () => {
    return PalletLocations;
};
