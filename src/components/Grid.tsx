import { useState } from 'react';

type GridSelectorProps = {
  size: number;
  isEditable: boolean
};

export default function GridSelector({ size, isEditable }: GridSelectorProps) {
  const [selectedCells, setSelectedCells] = useState<number[]>([]);

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
            gridTemplateColumns: `repeat(${size}, 40px)`,
            width: `${size * 40}px`
        }}
      >
        {Array.from({ length: size * size }).map((_, i) => {
            const isSelected = selectedCells.includes(i);
            return (
                <div
                key={i}
                onClick={() => handleClick(i)}
                className={`w-10 h-10 border border-gray-400 cursor-pointer transition-colors duration-200 ${
                    isSelected ? 'bg-blue-500' : 'bg-white'
                }`}
                />
            );
        })}
      </div>
    </div>
  );
}
