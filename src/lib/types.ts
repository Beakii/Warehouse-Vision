export type LocationData = {
    id: number;
    location: string;
    gridIndex: number;
    levels: number;
};
export type PalletData = {
    id: number;
    palletName: string;
    location: string;
    rackLevel: number;
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
    locationData?: LocationData[];
    palletData?: PalletData[];
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
    className?: string;
};
export type PalletListProps = {
    gridIndex?: number;
    locationData: LocationData[];
    palletData: PalletData[];
    className?: string;
};
export type GridItemProps = {
    cellSize: number;
    gridIndex: number;
    isSelected: boolean;
    locationData: LocationData[];
    palletData: PalletData[];
};
export type RelocatePalletProps = {
    palletName: string;
};
