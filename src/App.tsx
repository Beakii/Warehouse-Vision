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

            <div className="relative h-[calc(100vh-56px)]">
                
                <div className="absolute left-0 top-0 bottom-0 w-60 overflow-y-auto bg-slate-900">
                    <PalletList className="h-full px-2 py-4" />
                </div>

                <div className="flex justify-center items-start h-full">
                    <div className="ml-60">
                        <GridLayout
                            gridSize={gridSize}
                            selectedCells={selectedCells}
                            setSelectedCells={setSelectedCells}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
