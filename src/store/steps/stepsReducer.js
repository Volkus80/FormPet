import { createStore } from "redux";
import { STEP_DOWN, STEP_UP } from "./stepsConstants";

export const stepReducer = (state = 1, action) => {
    switch(action.type) {
        case STEP_UP: {
            return state < 4 ? ++state : state;
        }
        case STEP_DOWN: {
            return state > 1 ? --state : state;
        }
        default: {
            return state;
        }
    }
}

export const stepStore = createStore(stepReducer);