export type LocationInfo = {
    name: string;
    levels: number;
};
export type GetPalletByRackLocationProps = {
    rackLocation: string;
    gridNumberIndex: number;
    loopIndex: number;
};
export type UpdateCellsInterface = {
    gridSize: number;
    setCellSize: React.Dispatch<React.SetStateAction<number>>;
};
export type GridLayoutProps = {
    gridSize: number;
    selectedCells: number[];
    setSelectedCells?: React.Dispatch<React.SetStateAction<number[]>>;
};
export type IsOccupiedIndicatorProps = {
    isSelected: boolean;
    isOccupied: boolean;
};
export type PalletCardProps = {
    palletName: string;
    rackLocation: string;
    loopIndex: number;
    isEmpty: boolean;
};
