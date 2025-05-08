import { useState } from "react";
import GridLayout from "./components/GridLayout"
import Navbar from './components/Navbar'
import { DndContext, DragOverlay } from "@dnd-kit/core";

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [selectedCells, setSelectedCells] = useState<number[]>([]);
  const [draggedItem, setDraggedItem] = useState<React.ReactNode | null>(null);


  const gridSize = 12;

  return (
    <div className="bg-slate-600 w-screen h-screen">
      <Navbar 
        isEditable={isEditable} 
        setIsEditable={setIsEditable}
      />


    <DndContext
      onDragStart={(event) => {
        setDraggedItem(event.active.data.current?.children);
        console.log(draggedItem);
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

    <DragOverlay>
      {draggedItem}
    </DragOverlay>
    </div>
  )
}

export default App

