export const initialData = {
  deliveries: {
    "d-1": { id: "d-1", content: "First delivery" },
    "d-2": { id: "d-2", content: "Second delivery" },
    "d-3": { id: "d-3", content: "Third delivery" },
    "d-4": { id: "d-4", content: "Fourth delivery" },
    "d-5": { id: "d-5", content: "Fifth delivery" },
    "d-6": { id: "d-6", content: "Sixth delivery" }
  },
  vehicles: {
    unassigned: {
      id: "unassigned",
      title: "Unassigned",
      deliveryIds: []
    },
    "vehicle-1": {
      id: "vehicle-1",
      title: "First Vehicle",
      deliveryIds: ["d-1", "d-2"]
    },
    "vehicle-2": {
      id: "vehicle-2",
      title: "Second Vehicle",
      deliveryIds: ["d-3"]
    }
  },
  // orders: {
  //   "o-1": { id: "o-1", content: "First order" },
  //   "o-2": { id: "o-2", content: "Second order" }
  // },
  vehicleOrder: ["unassigned", "vehicle-1", "vehicle-2"]
};
