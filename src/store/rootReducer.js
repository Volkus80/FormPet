import { combineReducers } from "redux";
import { step } from "./steps/stepsReducer";
import { isMonthly } from "./terms/termsReducer";
import { plan } from "./plans/planReducer"; 

export const rootReducer = combineReducers({
    step,
    isMonthly,
    plan
});
