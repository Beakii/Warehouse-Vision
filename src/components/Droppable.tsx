import {useDroppable} from '@dnd-kit/core';

export function Droppable({ id, children }: { id: string; children: React.ReactNode }) {
  const {isOver, setNodeRef} = useDroppable({ id });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}