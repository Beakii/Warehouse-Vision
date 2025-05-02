import { useState } from "react";
import GridSelector from "./components/Grid"
import Navbar from './components/Navbar'
import WarehouseLayout from "./components/WarehouseLayout";

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [selectedCells, setSelectedCells] = useState<number[]>([]);

  const number = 10;

  return (
    <div className="bg-slate-600 w-screen h-screen">
      <Navbar 
        isEditable={isEditable} 
        setIsEditable={setIsEditable}
      />

      {
        isEditable
        ?
        <GridSelector 
          size={number} 
          isEditable={isEditable} 
          selectedCells={selectedCells} 
          setSelectedCells={setSelectedCells}/>
        :
        <WarehouseLayout size={number} selectedCells={selectedCells}/>
      }
    </div>
  )
}

export default App

