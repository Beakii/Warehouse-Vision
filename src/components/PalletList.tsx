import { getLocationInfo, mapGridToLocationName } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import PalletCard from "./PalletCard";

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
            <Accordion type="multiple">
                {
                    [...Array(location.levels)].map((_, i) => {
                        return(
                            <AccordionItem value={`item-${i+1}`}>
                                <Droppable id={`rack-${index}-level-${i+1}`}>
                                    <AccordionTrigger>{mapGridToLocationName(index)+(i+1)}</AccordionTrigger>
                                </Droppable>
                                <AccordionContent>
                                    <Draggable id={`pallet-${index}-${i+1}`}>
                                        <PalletCard/>
                                    </Draggable>
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