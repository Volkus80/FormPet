import { combineReducers } from "redux";
import { step } from "./steps/stepsReducer";
import { isMonthly } from "./terms/termsReducer";
import { plan } from "./plans/planReducer";
import { addOns } from "./addOnsS/addOnsReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  step,
  isMonthly,
  plan,
  addOns,
  user: userReducer,
});
