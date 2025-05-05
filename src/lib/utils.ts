import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]){
  return twMerge(clsx(inputs))
}

type UpdateCellsInterface = {
  size: number;
  setCellSize: React.Dispatch<React.SetStateAction<number>>;
}
export const updateCellSize = ({size, setCellSize} : UpdateCellsInterface) => {
  const padding = 100; // for some spacing around the grid
  const maxWidth = window.innerWidth - padding;
  const maxHeight = window.innerHeight - padding;
  const dimension = Math.min(maxWidth, maxHeight);
  const newCellSize = Math.floor(dimension / size);
  setCellSize(newCellSize);
};

export let RenewITLayout: number[] = [
  125,
  113,
  101,
  89,
  77,
  65,
  53,
  41,
  42,
  54,
  66,
  78,
  90,
  102,
  114,
  126,
  6,
  3,
  5,
  8,
  4,
  7,
  13,
  25,
  37,
  49,
  61,
  73,
  85,
  97,
  22,
  34,
  46,
  58,
  70,
  82,
  94,
  106,
  118,
  130,
  142
];

export const mapGridToLocationName = (index: number): string => {
  const indexToName = new Map<number, string>([
    // Right Wall
    [142, 'AB'], [130, 'AA'], [118, 'BB'], [106, 'BA'], [94, 'CB'], [82, 'CA'],
    [70, 'DB'], [58, 'DA'], [46, 'EB'], [34, 'EA'], [22, 'FA'],

    // Top Wall
    [8, 'GB'], [7, 'GA'], [6, 'HB'], [5, 'HA'], [4, 'IB'], [3, 'IA'],

    // Left Wall
    [13, 'JB'], [25, 'JA'], [37, 'KB'], [49, 'KA'], [61, 'LB'], [73, 'LA'],
    [85, 'MB'], [97, 'MA'],

    // Center Left
    [41, 'NA'], [53, 'NV'], [65, 'OA'], [77, 'OB'], [89, 'PA'], [101, 'PB'],
    [113, 'QA'], [125, 'QB'],

    // Center Right
    [42, 'UB'], [54, 'UA'], [66, 'TB'], [78, 'TA'], [90, 'SB'], [102, 'SA'],
    [114, 'RB'], [126, 'RA']
  ]);

  return indexToName.get(index)!;
};