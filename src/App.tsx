import { useState } from "react";
import GridLayout from "./components/GridLayout";
import Navbar from "./components/Navbar";

function App() {
    const [selectedCells, setSelectedCells] = useState<number[]>([]);
    const [gridSize, setGridSize] = useState<number>(12);

    return (
        <div className="bg-slate-600 w-screen h-screen">
            <Navbar />

            <GridLayout
                gridSize={gridSize}
                selectedCells={selectedCells}
                setSelectedCells={setSelectedCells}
            />
        </div>
    );
}

export default App;
