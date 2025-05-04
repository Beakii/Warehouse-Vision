import { useState } from "react";
import GridLayout from "./components/GridLayout"
import Navbar from './components/Navbar'

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [selectedCells, setSelectedCells] = useState<number[]>([]);

  const gridSize = 12;

  return (
    <div className="bg-slate-600 w-screen h-screen">
      <Navbar 
        isEditable={isEditable} 
        setIsEditable={setIsEditable}
      />

    <GridLayout 
          size={gridSize} 
          isEditable={isEditable} 
          selectedCells={selectedCells} 
          setSelectedCells={setSelectedCells}/>
    </div>
  )
}

export default App

