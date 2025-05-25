import { Popover } from "@radix-ui/react-popover";
import { Card, CardHeader } from "./ui/card";
import { PopoverContent, PopoverTrigger } from "./ui/popover";
import { MenuIcon } from "lucide-react";
import { PalletCardProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { RelocatePallet } from "@/api/apiRequests";

const PalletCard = ({
    palletName,
    rackLocation,
    loopIndex,
    isEmpty,
    className,
}: PalletCardProps) => {
    const displayLocation = rackLocation?.startsWith("Unallocated")
        ? "Unallocated"
        : `${rackLocation}${loopIndex + 1}`;
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
                <Popover>
                    <PopoverTrigger asChild>
                        <button className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100 hover:cursor-pointer">
                            <MenuIcon className="size-4" />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64 p-4">
                        <div
                            onClick={() => RelocatePallet({ palletName })}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            Relocate
                        </div>
                    </PopoverContent>
                </Popover>

                <CardHeader className="text-sm">{palletName}</CardHeader>
            </Card>
        </div>
    );
};

export default PalletCard;
