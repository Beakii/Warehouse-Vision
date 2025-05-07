import { getLocationInfo, mapGridToLocationName } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

type PalletListProps = {
    index: number;
}
const PalletList = ({index}:PalletListProps) => {
    const location = getLocationInfo(index);

    return(
        <Card>
            <CardHeader>
            {"Rack "+mapGridToLocationName(index)}
            </CardHeader>
            
            <CardContent>
            <Accordion type='single' collapsible>
                {
                    Array(location.levels).map((_, i) => {
                        return(
                            <AccordionItem value={`item-${i+1}`}>
                                <AccordionTrigger>{mapGridToLocationName(index)+(i+1)}</AccordionTrigger>
                                <AccordionContent>
                                    <Card>
                                    <CardHeader>Pallet Name</CardHeader>
                                    <CardFooter>Moved Here At: dd/mm/yyyy</CardFooter>
                                    </Card>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })
                }
            </Accordion>
            </CardContent>
        </Card>
    );
}

export default PalletList;