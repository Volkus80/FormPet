import { SET_PLAN } from "./plansConstants";
import { plans } from "../../data/plans";

const initialState = plans;

const setPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAN: {
      return state.map((plan) => {
        if (plan.selected) {
          plan.selected = false;
        }
        if (plan.id === action.planId) {
          plan.selected = !plan.selected;
        }
        return plan;
      });
    }
    default: {
      return state;
    }
  }
};

export { setPlanReducer as plan };
