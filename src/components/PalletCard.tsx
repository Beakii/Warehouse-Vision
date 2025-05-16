import { Popover } from "@radix-ui/react-popover";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { PopoverContent, PopoverTrigger } from "./ui/popover";
import { MenuIcon } from "lucide-react";
// import { RelocatePallet } from "@/api/apiRequests";

type PalletCardProps = {
    palletName: string;
    rackLocation: string;
};
const PalletCard = ({ palletName, rackLocation }: PalletCardProps) => {
    // const handleRelocate = () => {
    //     RelocatePallet();
    // };

    return (
        <div className="bg-amber-300 flex justify-center content-center items-center border-2 border-black p-1 m-1">
            <div className="text-sm px-2">{rackLocation}</div>
            <Card className="relative w-50 border border-dashed">
                <Popover>
                    <PopoverTrigger asChild>
                        <button className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100 hover:cursor-pointer">
                            <MenuIcon className="size-4" />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64 p-4">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Relocate</div>
                    </PopoverContent>
                </Popover>

                <CardHeader className="text-sm">{palletName}</CardHeader>
                <CardFooter className="text-xs">Moved Here At: dd/mm/yyyy</CardFooter>
            </Card>
        </div>
    );
};

export default PalletCard;
