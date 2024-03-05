import { combineReducers } from "redux";
import { step } from "./steps/stepsReducer";
import { isMonthly } from "./terms/termsReducer";
import { plan } from "./plans/planReducer";
import { addOns } from "./addOnsS/addOnsReducer";

export const rootReducer = combineReducers({
  step,
  isMonthly,
  plan,
  addOns,
});
