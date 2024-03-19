import { SET_USER_MAIL, SET_USER_NAME, SET_USER_PHONE } from "./userConstants";

const userReducer = (state = { name: "", mail: "", phone: "" }, action) => {
  switch (action.type) {
    case SET_USER_NAME: {
      return { ...state, name: action.name };
    }
    case SET_USER_MAIL: {
      return { ...state, mail: action.mail };
    }
    case SET_USER_PHONE: {
      return { ...state, phone: action.phone };
    }
    default:
      return state;
  }
};

export { userReducer };
