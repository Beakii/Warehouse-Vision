import { mapGridToLocationName } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

type PalletListProps = {
    index: number;
}
const PalletList = ({index}:PalletListProps) => {
    return(
        <Card>
            <CardHeader>
            {"Rack "+mapGridToLocationName(index)}
            </CardHeader>
            
            <CardContent>
            <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                <AccordionTrigger>{mapGridToLocationName(index)+"1"}</AccordionTrigger>
                <AccordionContent>
                    <Card>
                    <CardHeader>Pallet Name</CardHeader>
                    <CardFooter>Moved Here At: dd/mm/yyyy</CardFooter>
                    </Card>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-2'>
                <AccordionTrigger>{mapGridToLocationName(index)+"2"}</AccordionTrigger>
                <AccordionContent>
                    <Card>
                    <CardHeader>Pallet Name</CardHeader>
                    <CardFooter>Moved Here At: dd/mm/yyyy</CardFooter>
                    </Card>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-3'>
                <AccordionTrigger>{mapGridToLocationName(index)+"3"}</AccordionTrigger>
                <AccordionContent>
                    <Card>
                    <CardHeader>Pallet Name</CardHeader>
                    <CardFooter>Moved Here At: dd/mm/yyyy</CardFooter>
                    </Card>
                </AccordionContent>
                </AccordionItem>
            </Accordion>
            </CardContent>
        </Card>
    );
}

export default PalletList;