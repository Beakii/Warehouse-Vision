import { Popover } from "@radix-ui/react-popover";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { PopoverContent, PopoverTrigger } from "./ui/popover";
import { MenuIcon } from "lucide-react";
// import { RelocatePallet } from "@/api/apiRequests";

type PalletCardProps = {
    index: number;
};
const PalletCard = ({ index }: PalletCardProps) => {
    // const handleRelocate = () => {
    //     RelocatePallet();
    // };

    return (
        <Card className="relative w-50 border border-dashed">
            <Popover>
                <PopoverTrigger asChild>
                    <button className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100">
                        <MenuIcon className="size-4" />
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-4">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Relocate</div>
                </PopoverContent>
            </Popover>

            <CardHeader className="text-sm">Pallet Name</CardHeader>
            <CardFooter className="text-xs">Moved Here At: dd/mm/yyyy</CardFooter>
        </Card>
    );
};

export default PalletCard;
