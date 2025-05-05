import {  mapGridToLocationName, MockAssetUIDS, RenewITLayout, updateCellSize } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Card, CardContent, CardHeader } from './ui/card';
import { Accordion, AccordionContent, AccordionTrigger } from './ui/accordion';
import { AccordionItem } from '@radix-ui/react-accordion';

type GridLayoutProps = {
  size: number;
  isEditable?: boolean;
  selectedCells: number[];
  setSelectedCells?:  React.Dispatch<React.SetStateAction<number[]>>;
};

export default function GridLayout({ size, isEditable, selectedCells, setSelectedCells }: GridLayoutProps) {

  const [cellSize, setCellSize] = useState(40); // default

  useEffect(() => {
    setSelectedCells!(RenewITLayout);
    updateCellSize({size, setCellSize});
    const handleResize = () => updateCellSize({size, setCellSize});
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  const handleClick = (index: number) => {
    console.log(selectedCells);
    setSelectedCells!(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
  };

  return (
    <div className="flex justify-center items-center" style={{ height: 'calc(100vh - 56px)' }}>
      <div
        className="grid gap-0 m-5 border border-dashed"
        style={{
          gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: size * size }).map((_, i) => {
          const isSelected = selectedCells.includes(i);
          return (
            <HoverCard>
              <HoverCardTrigger>
                <div
                key={i}
                onClick={() => handleClick(i)}
                style={{
                  width: `${cellSize}px`,
                  height: `${cellSize}px`,
                }}
                className={`border border-gray-400 transition-colors duration-200 
                  ${isEditable ? 'cursor-pointer' : 'pointer-events-none'} 
                  ${
                    isSelected 
                    ? isEditable ? 'bg-green-400' : 'bg-blue-500'
                    : isEditable ? 'bg-white' : 'bg-slate-600 border-none'
                  }`
                }
              >
                {isSelected ? mapGridToLocationName(i) : null}
              </div>    
              </HoverCardTrigger>

              {
                isSelected
                ?
                <HoverCardContent>
                  <Card>
                    <CardHeader>
                      {"Rack "+mapGridToLocationName(i)}
                    </CardHeader>
                    
                    <CardContent>
                      <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                          <AccordionTrigger>{mapGridToLocationName(i)+"1"}</AccordionTrigger>
                          <AccordionContent>
                            <Accordion type='single' collapsible>
                              <AccordionItem value='sub-item-1'>
                                <AccordionTrigger>Pallet Name</AccordionTrigger>
                                  {
                                    MockAssetUIDS.map((uid, index) => {
                                      return(
                                      <AccordionContent key={index}>
                                        {uid}
                                      </AccordionContent>
                                      );
                                    })
                                  }
                              </AccordionItem>
                            </Accordion>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value='item-2'>
                          <AccordionTrigger>{mapGridToLocationName(i)+"2"}</AccordionTrigger>
                          <AccordionContent>
                            Pallet Name
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value='item-3'>
                          <AccordionTrigger>{mapGridToLocationName(i)+"3"}</AccordionTrigger>
                          <AccordionContent>
                            Pallet Name
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </HoverCardContent>
                :
                null
              }
            </HoverCard>
          );
        })}
      </div>
    </div>
  );
}
