import { useRef, useState, useCallback } from "react";
import { validator } from "../utils/validator";
import { userData } from "../data/userData";

const inputValidator = (num) => {
  switch (num) {
    case 0:
      return validator.userName;
    case 1:
      return validator.email;
    case 2:
      return validator.phone;
    default:
      return (n) => true;
  }
};

export const useInput = (num) => {
  const param = useCallback(() => {
    switch (num) {
      case 0:
        return "name";
      case 1:
        return "email";
      case 2:
        return "phone";
      default:
        return "name";
    }
  }, [num]);
  const [value, setValue] = useState(userData[param()]);
  const [error, setErr] = useState(false);
  const ref = useRef();
  const validate = inputValidator(num);

  const onChange = (e) => setValue(e.target.value);
  const onBlur = () => {
    if (validate(value)) {
      setErr(false);
    } else {
      setErr(true);
      ref.current.focus();
    }
    // (!validate(value) ? setErr(true) : setErr(false));
  };
  // const onFocus = () => setErr(false);

  return { value, ref, error, onChange, onBlur /*, onFocus*/ };
};
