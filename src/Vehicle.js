import { Droppable } from "react-beautiful-dnd";
import { DeliveryList } from "./Delivery";

const Vehicle = ({ vehicle, deliveries }) => {
  return (
    <div>
      <h1>{vehicle.title}</h1>
      <Droppable droppableId={vehicle.id}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <DeliveryList deliveries={deliveries} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Vehicle;
