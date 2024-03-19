import s from "./InputBlock.module.scss";
import bind from "classnames/bind";
import { useEffect } from "react";
import { useInput } from "../../hooks/useInput";
import { validator } from "../../utils/validator";

const cx = bind.bind(s);

function InputBlock({ label, ...props }) {
  const errorMessage = "This field is required";
  const inputValidator = () => {
    switch (props.num) {
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
  const { value, ref, error, onBlur, onChange, onFocus } = useInput(inputValidator());

  const errorShow = cx({ inputblock_header_errorMessage: true, error: error });

  useEffect(() => {
    if (props.num === 0) {
      ref.current.focus();
    }
  }, []);

  return (
    <div className={s.inputblock}>
      <div className={s.inputblock_header}>
        <p className={s.inputblock_header_label}>{label}</p>
        <p className={errorShow}>{errorMessage}</p>
      </div>
      <input
        type="text"
        className={s.inputblock_input}
        value={value}
        ref={ref}
        onChange={onChange}
        onFocus={() => onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}

export { InputBlock };
