import { getLocationInfo, mapGridToLocationName } from "@/lib/utils";
import PalletCard from "./PalletCard";

type PalletListProps = {
    index: number;
};
const PalletList = ({ index }: PalletListProps) => {
    const location = getLocationInfo(index);

    return (
        <div>
            {"Rack " + mapGridToLocationName(index)}

            {[...Array(location.levels)].map((_, i) => {
                return (
                    <div
                        className="bg-amber-300 flex justify-center content-center items-center border-2 border-black p-1 m-1"
                        id={`rack-${index}-level-${i + 1}`}
                    >
                        <div className="text-sm px-2">{mapGridToLocationName(index) + (i + 1)}</div>
                        <PalletCard index={index} />
                    </div>
                );
            })}
        </div>
    );
};

export default PalletList;
