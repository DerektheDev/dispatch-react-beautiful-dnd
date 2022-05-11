import { Draggable } from "react-beautiful-dnd";

export const Delivery = ({ delivery, index }) => (
  <Draggable draggableId={delivery.id} index={index}>
    {(provided) => (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {delivery.content}
      </div>
    )}
  </Draggable>
);

export const DeliveryList = ({ deliveries }) => {
  return (
    <div>
      {deliveries.map((delivery, index) => (
        <Delivery key={delivery.id} delivery={delivery} index={index} />
      ))}
    </div>
  );
};
