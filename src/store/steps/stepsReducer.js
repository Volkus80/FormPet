import { STEP_DOWN, STEP_UP } from "./stepsConstants";

export const step = (state = 1, action) => {
    switch (action.type) {
        case STEP_UP: {
            return state < 5 ? state + 1 : state;
        }
        case STEP_DOWN: {
            return state > 1 ? state - 1 : state;
        }
        default: {
            return state;
        }
    }
};
