import { SET_USER_MAIL, SET_USER_NAME, SET_USER_PHONE } from "./userConstants";

const setName = (name) => {
  type: SET_USER_NAME, name;
};

const setMail = (mail) => {
  type: SET_USER_MAIL, mail;
};

const setPhone = (phone) => {
  type: SET_USER_PHONE, phone;
};

export { setMail, setName, setPhone };
