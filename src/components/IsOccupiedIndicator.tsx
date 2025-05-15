type IsOccupiedIndicatorProps = {
    isSelected: boolean;
};
const IsOccupiedIndicator = ({ isSelected }: IsOccupiedIndicatorProps) => {
    return (
        <div
            className={`${
                isSelected ? "xl:w-full xl:h-5 xl:bg-amber-300 border border-gray-600 pt-0.5" : ""
            }`}
        />
    );
};

export default IsOccupiedIndicator;
