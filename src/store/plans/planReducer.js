import { SET_PLAN } from "./plansConstants"

 const setPlanReducer = (state = 1, action) => {
    switch (action.type) {
        case SET_PLAN: {
            return action.planId;
        }
        default: {
            return state;
        }
    }
}

export {setPlanReducer as plan};