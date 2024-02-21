import { MONTHLY, YEARLY } from "./termsConstants";

export const term = (state = YEARLY, action) => {
    switch (action.type) {
        case MONTHLY: {
            return (state = MONTHLY);
        }

        case YEARLY: {
            return (state = YEARLY);
        }

        default: {
            return state;
        }
    }
};
