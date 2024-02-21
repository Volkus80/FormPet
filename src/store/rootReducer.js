import { combineReducers } from "redux";
import { step } from "./steps/stepsReducer";
import { term } from "./terms/termsReducer";

export const rootReducer = combineReducers({
    step,
    term
});
