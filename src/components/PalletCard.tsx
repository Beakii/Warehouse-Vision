import { Card, CardHeader } from "./ui/card";
import { MenuIcon } from "lucide-react";
import { PalletCardProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { RelocatePallet } from "@/api/apiRequests";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Button } from "./ui/button";

const PalletCard = ({
    palletName,
    rackLocation,
    loopIndex,
    isEmpty,
    locationOptions,
    locationData,
    palletData,
    className,
}: PalletCardProps) => {
    const displayLocation = rackLocation?.startsWith("Unallocated")
        ? "Unallocated"
        : `${rackLocation}${loopIndex + 1}`;

    const [newLocation, setNewLocation] = useState("");
    const [newLocationLevel, setNewLocationLevel] = useState(0);
    return (
        <div
            className={cn(
                `${
                    isEmpty ? "bg-amber-300" : "bg-green-300"
                } flex justify-center content-center items-center border-2 border-black p-1 m-1`,
                className
            )}
        >
            <div className="text-sm px-2">{displayLocation}</div>
            <Card className="relative w-50 border border-dashed">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100 hover:cursor-pointer">
                            <MenuIcon className="size-4" />
                        </button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>Relocating Pallet: {palletName}</DialogTitle>
                        <p className="text-sm">Current Location: {displayLocation}</p>
                        <p>Destination: </p>
                        <div>
                            <Select value={newLocation} onValueChange={setNewLocation}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a location" />
                                </SelectTrigger>
                                <SelectContent className="max-h-64 overflow-auto">
                                    {locationData!
                                        .sort((a, b) => a.location.localeCompare(b.location)) // Alphabetical sort
                                        .map((loc) => {
                                            const palletsAtLocation = palletData!.filter(
                                                (p) => p.location === loc.location
                                            );
                                            const occupiedCount = palletsAtLocation.length;

                                            let statusClass = "bg-green-100 text-green-800";
                                            if (occupiedCount === 3)
                                                statusClass = "bg-red-100 text-red-800";
                                            else if (occupiedCount > 0)
                                                statusClass = "bg-orange-100 text-orange-800";

                                            const isDisabled = occupiedCount >= loc.levels;

                                            return (
                                                <SelectItem
                                                    key={loc.id}
                                                    value={loc.location}
                                                    disabled={isDisabled}
                                                    className={`${statusClass} cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                                                >
                                                    {loc.location} ({loc.levels - occupiedCount}{" "}
                                                    open)
                                                </SelectItem>
                                            );
                                        })}
                                </SelectContent>
                            </Select>
                            <Select
                                value={newLocationLevel.toString()}
                                onValueChange={(value) => setNewLocationLevel(Number(value))}
                            >
                                <SelectTrigger className="w-full mt-2">
                                    <SelectValue placeholder="Select a rack level" />
                                </SelectTrigger>
                                <SelectContent className="max-h-60 overflow-auto">
                                    {Array.from({ length: 3 }, (_, i) => {
                                        const level = i + 1;

                                        const isLevelOccupied = palletData!.some(
                                            (p) =>
                                                p.location === newLocation && p.rackLevel === level
                                        );

                                        const className = isLevelOccupied
                                            ? "opacity-50 bg-red-100 text-red-800 cursor-not-allowed"
                                            : "bg-green-100 text-green-800";

                                        return (
                                            <SelectItem
                                                key={level}
                                                value={level.toString()}
                                                disabled={isLevelOccupied}
                                                className={className}
                                            >
                                                Level {level} {isLevelOccupied ? "(Occupied)" : ""}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>
                        </div>
                        <p>
                            Relocating <span className="bg-amber-300">{palletName}</span> from{" "}
                            <span className="bg-amber-300">{displayLocation}</span> to{" "}
                            <span className="bg-green-300">{newLocation + newLocationLevel}</span>
                        </p>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button
                                    onClick={() =>
                                        RelocatePallet({
                                            palletName,
                                            destinationLocation: newLocation,
                                            desinationRackLevel: newLocationLevel,
                                        })
                                    }
                                    type="submit"
                                >
                                    Relocate
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <CardHeader className="text-sm">{palletName}</CardHeader>
            </Card>
        </div>
    );
};

export default PalletCard;
