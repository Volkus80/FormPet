import { combineReducers } from "redux";
import { step } from "./steps/stepsReducer";

export const rootReducer = combineReducers({
    step
});
