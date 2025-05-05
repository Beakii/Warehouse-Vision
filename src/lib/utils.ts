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

export const mapGridToLocationName = (index:number) => {
  switch(index){
    //Right Wall
    //#region 
    case 142:
      return 'AB'
    case 130:
      return 'AA'
    case 118:
      return 'BB'
    case 106:
      return 'BA'
    case 94:
      return 'CB'
    case 82:
      return 'CA'
    case 70:
      return 'DB'
    case 58:
      return 'DA'
    case 46:
      return 'EB'
    case 34:
      return 'EA'
    case 22:
      return 'FA'
    //#endregion
    
    //Top Wall
    //#region
    case 8:
      return 'GB'
    case 7:
      return 'GA'
    case 6:
      return 'HB'
    case 5:
      return 'HA'
    case 4:
      return 'IB'
    case 3:
      return 'IA'
    //#endregion
    
    //Left Wall
    //#region 
    case 13:
      return 'JB'
    case 25:
      return 'JA'
    case 37:
      return 'KB'
    case 49:
      return 'KA'
    case 61:
      return 'LB'
    case 73:
      return 'LA'
    case 85:
      return 'MB'
    case 97:
      return 'MA'
    //#endregion
  
    //Center Left
    //#region 
    case 41:
      return 'NA'
    case 53:
      return 'NV'
    case 65:
      return 'OA'
    case 77:
      return 'OB'
    case 89:
      return 'PA'
    case 101:
      return 'PB'
    case 113:
      return 'QA'
    case 125:
      return 'QB'
    //#endregion
  
    //Center Right
    //#region 
    case 42:
      return 'UB'
    case 54:
      return 'UA'
    case 66:
      return 'TB'
    case 78:
      return 'TA'
    case 90:
      return 'SB'
    case 102:
      return 'SA'
    case 114:
      return 'RB'
    case 126:
      return 'RA'
    //#endregion
  }
}