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
  12,
  24,
  36,
  48,
  60,
  72,
  84,
  96,
  108,
  120,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  10,
  9,
  23,
  35,
  47,
  59,
  71,
  83,
  95,
  107,
  119,
  131,
  143,
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
  126
];

export const mapGridToLocationName = (index:number) => {
  switch(index){
    //#Right Wall 
    case 143:
      return 'AB'
    case 131:
      return 'AA'
    case 119:
      return 'BB'
    case 107:
      return 'BA'
    case 95:
      return 'CB'
    case 83:
      return 'CA'
    case 71:
      return 'DB'
    case 59:
      return 'DA'
    case 47:
      return 'EB'
    case 35:
      return 'EA'
    case 23:
      return 'F'
      //#endregion
    
    case 10:
      return 'GB'
    case 9:
      return 'GA'
    case 8:
      return 'HB'
    case 7:
      return 'HA'
    case 6:
      return 'IB'
    case 5:
      return 'IA'
  }
}