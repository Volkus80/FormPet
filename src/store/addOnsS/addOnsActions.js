import { SELECT } from "./addOnsConstants";

const selectAddOn = (addOnId) => ({
  type: SELECT,
  addOnId,
});

export { selectAddOn };
