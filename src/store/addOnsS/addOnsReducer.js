import { SELECT } from "./addOnsConstants";
import { addOnsData } from "../../data/addOnsData";

const initialState = addOnsData;

const addOns = (state = initialState, action) => {
  switch (action.type) {
    case SELECT: {
      return state.map((addOn) =>
        addOn.id === action.addOnId
          ? { ...addOn, selected: !addOn.selected }
          : addOn
      );
    }
    default:
      return state;
  }
};

export { addOns };
