import s from "./InputBlock.module.scss";
import bind from "classnames/bind";
import { useRef, useEffect } from "react";

const cx = bind.bind(s);

function InputBlock({ label, error = false, ...props }) {
  const errorMessage = "This field is required";
  const errorShow = cx({inputblock_header_errorMessage: true, error: error});
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef.current);
    if(inputRef.current.key === 0) {
      console.log(inputRef.current);
      inputRef.current.focus = true;
    }
  } )

  return (
    <div className={s.inputblock}>
      <div className={s.inputblock_header}>
        <p className={s.inputblock_header_label}>{label}</p>
        <p className={errorShow}>{errorMessage}</p>
      </div>
      <input type="text" className={s.inputblock_input} ref={inputRef} key={props.key}/>
    </div>
  );
}

export { InputBlock };
