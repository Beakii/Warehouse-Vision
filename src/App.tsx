import { useEffect, useState } from "react";
import GridLayout from "./components/GridLayout";
import Navbar from "./components/Navbar";
import PalletList from "./components/PalletList";
import { LocationData, PalletData } from "./lib/types";
import { GetAllLocationData, GetAllPalletData, GetLayoutData } from "./api/apiRequests";

const App = () => {
    const [selectedCells, setSelectedCells] = useState<number[]>([]);
    const [gridSize, setGridSize] = useState<number>(12);
    const [locationData, setLocationData] = useState<LocationData[]>([]);
    const [palletData, setPalletData] = useState<PalletData[]>([]); // Adjust type as needed

    //Calling API functions to fetch data
    useEffect(() => {
        const allLocations = GetAllLocationData();
        allLocations
            .then((data: LocationData[]) => {
                setLocationData(data);
            })
            .catch((error) => {
                console.error("Error fetching pallet locations:", error);
            });

        const allPallets = GetAllPalletData();
        allPallets
            .then((data: PalletData[]) => {
                setPalletData(data);
            })
            .catch((error) => {
                console.error("Error fetching pallets:", error);
            });

        const layoutData = GetLayoutData({ businessName: "renewit" });
        if (layoutData) {
            setSelectedCells!(layoutData);
        }
    }, []);

    return (
        <div className="bg-slate-600 w-screen h-screen">
            <Navbar />
            <div className="flex flex-col h-[calc(100vh-56px)] lg:flex-row lg:content-evenly">
                <PalletList
                    locationData={locationData}
                    palletData={palletData}
                    className="lg:max-h-[calc(100vh-75px)] m-2 hidden lg:block max-w-xs overflow-auto mx-auto"
                />

                <GridLayout
                    gridSize={gridSize}
                    selectedCells={selectedCells}
                    locationData={locationData}
                    palletData={palletData}
                />
            </div>
        </div>
    );
};

export default App;
