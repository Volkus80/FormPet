import s from "./InputBlock.module.scss";
import cn from "classnames";
import bind from "classnames/bind";
const cx = bind.bind(s);

function InputBlock({ label, error = false }) {
  const errorMessage = "This field is required";
  return (
    <div className={s.inputblock}>
      <div className={s.inputblock_header}>
        <p className={s.inputblock_header_label}>{label}</p>
        <p className={s.inputblock_header_errorMessage}>{errorMessage}</p>
      </div>
      <input type="text" className={s.inputblock_input} />
    </div>
  );
}

export { InputBlock };
