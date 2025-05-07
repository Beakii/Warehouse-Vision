import {  mapGridToLocationName, RenewITLayout, updateCellSize } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import PalletList from './PalletList';

type GridLayoutProps = {
  size: number;
  isEditable?: boolean;
  selectedCells: number[];
  setSelectedCells?:  React.Dispatch<React.SetStateAction<number[]>>;
};

export default function GridLayout({ size, isEditable, selectedCells, setSelectedCells }: GridLayoutProps) {

  const [cellSize, setCellSize] = useState(40); // default

  useEffect(() => {
    setSelectedCells!(RenewITLayout);
    updateCellSize({size, setCellSize});
    const handleResize = () => updateCellSize({size, setCellSize});
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  const handleClick = (index: number) => {
    console.log(selectedCells);
    setSelectedCells!(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
  };

  return (
    <div className="flex justify-center items-center" style={{ height: 'calc(100vh - 56px)' }}>
      <div
        className="grid gap-0 m-5 border border-dashed"
        style={{
          gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: size * size }).map((_, i) => {
          const isSelected = selectedCells.includes(i);
          return (
            <HoverCard>
              <HoverCardTrigger>
                <div
                  key={i}
                  onClick={() => handleClick(i)}
                  style={{
                    width: `${cellSize}px`,
                    height: `${cellSize}px`,
                  }}
                  className={`border border-gray-400 transition-colors duration-200 
                    ${isEditable ? 'cursor-pointer' : 'pointer-events-none'} 
                    ${
                      isSelected 
                      ? isEditable ? 'bg-green-400' : 'bg-blue-500'
                      : isEditable ? 'bg-white' : 'bg-slate-600 border-none'
                    }`
                  }
                  >
                  {isSelected ? mapGridToLocationName(i) : null}
                </div>    
              </HoverCardTrigger>
              
              {
                isSelected
                ?
                <HoverCardContent>
                  <PalletList index={i}/>
                </HoverCardContent>
                :
                null
              }
            </HoverCard>
          );
        })}
      </div>
    </div>
  );
}
