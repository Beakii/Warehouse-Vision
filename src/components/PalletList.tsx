import { getLocationInfo, mapGridToLocationName } from "@/lib/utils";
import { GetPalletByRackLocation } from "@/api/apiRequests";

type PalletListProps = {
    gridNumberIndex: number;
};
const PalletList = ({ gridNumberIndex }: PalletListProps) => {
    const location = getLocationInfo(gridNumberIndex);

    return (
        <div>
            {"Rack " + mapGridToLocationName(gridNumberIndex)}

            {[...Array(location.levels)].map((_, i) => {
                return GetPalletByRackLocation({
                    loopIndex: i,
                    gridNumberIndex: gridNumberIndex,
                    rackLocation: mapGridToLocationName(gridNumberIndex),
                });
            })}
        </div>
    );
};

export default PalletList;
