import { useState } from "react";
import GridLayout from "./components/GridLayout";
import Navbar from "./components/Navbar";
import PalletList from "./components/PalletList";

function App() {
    const [selectedCells, setSelectedCells] = useState<number[]>([]);
    const [gridSize, setGridSize] = useState<number>(12);

    return (
        <div className="bg-slate-600 w-screen h-screen">
            <Navbar />

            <div className="flex justify-evenly h-[calc(100vh-56px)] overflow-hidden">
            <PalletList className="bg-slate-900 overflow-y-auto w-60" />
            
            <GridLayout
                gridSize={gridSize}
                selectedCells={selectedCells}
                setSelectedCells={setSelectedCells}
            />

            <PalletList className="bg-slate-900 overflow-y-auto w-60" />
            </div>

        </div>
    );
}

export default App;
