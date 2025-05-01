import { useEffect, useState } from 'react';

type GridSelectorProps = {
  size: number;
  isEditable: boolean
};

export default function GridSelector({ size, isEditable }: GridSelectorProps) {
  const [selectedCells, setSelectedCells] = useState<number[]>([]);
  const [cellSize, setCellSize] = useState(40); // default

  useEffect(() => {
    const updateCellSize = () => {
      const padding = 20; // for some spacing around the grid
      const maxWidth = window.innerWidth - padding;
      const maxHeight = window.innerHeight - padding;
      const dimension = Math.min(maxWidth, maxHeight);
      const newCellSize = Math.floor(dimension / size);
      setCellSize(newCellSize);
    };

    updateCellSize();
    window.addEventListener('resize', updateCellSize);
    return () => window.removeEventListener('resize', updateCellSize);
  }, [size]);

  const handleClick = (index: number) => {
    setSelectedCells(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
  };

  return (
<div className="flex justify-center items-center h-screen">
      <div
        className="grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: size * size }).map((_, i) => {
          const isSelected = selectedCells.includes(i);
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
              }}
              className={`border border-gray-400 transition-colors duration-200 ${
                isEditable ? 'cursor-pointer' : 'pointer-events-none opacity-75'
              } ${isSelected ? 'bg-blue-500' : 'bg-white'}`}
            />
          );
        })}
      </div>
    </div>
  );
}
