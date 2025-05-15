import { getLocationInfo, mapGridToLocationName } from "@/lib/utils";
import PalletCard from "./PalletCard";

type PalletListProps = {
    gridNumberIndex: number;
};
const PalletList = ({ gridNumberIndex }: PalletListProps) => {
    const location = getLocationInfo(gridNumberIndex);

    return (
        <div>
            {"Rack " + mapGridToLocationName(gridNumberIndex)}

            {[...Array(location.levels)].map((_, i) => {
                return <PalletCard gridNumberIndex={gridNumberIndex} loopIndex={i} />;
            })}
        </div>
    );
};

export default PalletList;
