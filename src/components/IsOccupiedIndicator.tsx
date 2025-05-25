import { IsOccupiedIndicatorProps } from "@/lib/types";

const IsOccupiedIndicator = ({ isSelected, isOccupied }: IsOccupiedIndicatorProps) => {
    return (
        <div
            className={`
                ${isSelected ? "hidden md:block w-full h-5 border border-gray-600" : ""}
                ${isOccupied ? "bg-green-300" : "bg-amber-300"}`}
        />
    );
};

export default IsOccupiedIndicator;
