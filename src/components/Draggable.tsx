import {useDraggable} from '@dnd-kit/core';

export function Draggable({ id, children }: { id: string; children: React.ReactNode }) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
    data: {children}
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}