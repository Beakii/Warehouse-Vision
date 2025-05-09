import { useState } from "react";
import GridLayout from "./components/GridLayout"
import Navbar from './components/Navbar'
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { createPortal } from "react-dom";

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [selectedCells, setSelectedCells] = useState<number[]>([]);
  const [draggedItem, setDraggedItem] = useState<React.ReactNode | null>(null);
  const [gridSize, setGridSize] = useState<number>(12);

  return (
    <div className="bg-slate-600 w-screen h-screen">
      <Navbar 
        isEditable={isEditable} 
        setIsEditable={setIsEditable}
      />

    <DndContext
      onDragStart={(event) => {
        const item = event.active.data.current?.children;
        if (item){
          setDraggedItem(item);
        }
      }}
      onDragEnd={(event) => {
        setDraggedItem(null);
      }}
    >
      <GridLayout 
            size={gridSize} 
            isEditable={isEditable} 
            selectedCells={selectedCells} 
            setSelectedCells={setSelectedCells}/>
    </DndContext>

    <DragOverlay zIndex={9999}>
      {createPortal(draggedItem, document.getElementById("drag-overlay-root")!)}
    </DragOverlay>
    </div>
  )
}

export default App

