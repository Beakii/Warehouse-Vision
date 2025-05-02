import { useEffect, useRef, useState } from "react";

type WarehouseLayoutProps = {
    size: number;
    selectedCells: number[];
  };

const WarehouseLayout = ({ size, selectedCells }: WarehouseLayoutProps) => {
      const [cellSize, setCellSize] = useState(30); // default
      const gridContainer = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        const updateCellSize = () => {
            if (!gridContainer.current) return;
            const { width, height } = gridContainer.current.getBoundingClientRect();
            console.log(height)
            const dimension = Math.min(width, height);
            const newCellSize = Math.floor(dimension / size);
            setCellSize(newCellSize);
        };
    
        updateCellSize();
        window.addEventListener('resize', updateCellSize);
        return () => window.removeEventListener('resize', updateCellSize);
      }, [size]);

    return (
        <div ref={gridContainer} className="flex justify-center items-center h-screen">
        <div
          className="grid gap-0 border"
          style={{
            gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
          }}
        >
          {Array.from({ length: size * size }).map((_, i) => {
            const isSelected = selectedCells.includes(i);
            return (
              <div
                key={i}
                style={{
                  width: `${cellSize}px`,
                  height: `${cellSize}px`,
                }}
                className={`${isSelected ? 'bg-blue-500 border' : ''}`}
              />
            );
          })}
        </div>
      </div>
    );
}

export default WarehouseLayout;