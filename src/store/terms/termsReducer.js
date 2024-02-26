import { MONTHLY } from "./termsConstants";
// import { MONTHLY, YEARLY } from "./termsConstants";

export const isMonthly = (state = true, action) => {
    switch (action.type) {
        case MONTHLY: {
            return (state = !state);
        }

        // case YEARLY: {
        //     return (state = YEARLY);
        // }

        default: {
            return state;
        }
    }
};
