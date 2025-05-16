type IsOccupiedIndicatorProps = {
    isSelected: boolean;
    isOccupied: boolean;
};
const IsOccupiedIndicator = ({ isSelected, isOccupied }: IsOccupiedIndicatorProps) => {
    return (
        <div
            className={`${isSelected ? "xl:w-full xl:h-5 border border-gray-600 pt-0.5" : ""}
            ${isOccupied ? "bg-green-300" : "bg-amber-300"}`}
        />
    );
};

export default IsOccupiedIndicator;
