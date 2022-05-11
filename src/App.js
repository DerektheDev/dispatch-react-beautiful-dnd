import { useState } from "react";
// rather than sortable vehicles, we need draggable grouped orders/manifests
import { DragDropContext } from "react-beautiful-dnd";
import { initialData } from "./data";
import Vehicle from "./Vehicle";
import React from "react";

const DndDemo = () => {
  const [data, setData] = useState(initialData);

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // const vehicle = data.vehicles[source.droppableId];
    const startVehicle = data.vehicles[source.droppableId];
    const finishVehicle = data.vehicles[destination.droppableId];

    if (startVehicle === finishVehicle) {
      const newDeliveryIds = Array.from(startVehicle.deliveryIds);
      newDeliveryIds.splice(source.index, 1);
      newDeliveryIds.splice(destination.index, 0, draggableId);

      const newVehicle = {
        ...startVehicle,
        deliveryIds: newDeliveryIds
      };

      const newState = {
        ...data,
        vehicles: { ...data.vehicles, [newVehicle.id]: newVehicle }
      };

      setData(newState);
    }

    const startDeliveryIds = Array.from(startVehicle.deliveryIds);
    startDeliveryIds.splice(source.index, 1);
    const newStart = {
      ...startVehicle,
      deliveryIds: startDeliveryIds
    };

    const finishDeliveryIds = Array.from(finishVehicle.deliveryIds);
    finishDeliveryIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finishVehicle,
      deliveryIds: finishDeliveryIds
    };

    const newState = {
      ...data,
      vehicles: {
        ...data.vehicles,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };

    setData(newState);
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {data.vehicleOrder.map((vehicleId) => {
          const vehicle = data.vehicles[vehicleId];
          const deliveries = vehicle.deliveryIds.map(
            (deliveryId) => data.deliveries[deliveryId]
          );

          return (
            <Vehicle
              key={vehicle.id}
              vehicle={vehicle}
              deliveries={deliveries}
            />
          );
        })}
      </DragDropContext>
    </>
  );
};

export default DndDemo;
