import s from "./InputBlock.module.scss";
import bind from "classnames/bind";
import { useRef, useEffect, useState } from "react";

const cx = bind.bind(s);

function InputBlock({ label, ...props }) {
  const errorMessage = "This field is required";
  
  const inputRef = useRef();

  const [error, setError] = useState(false);
  const [value, setValue] = useState('');

  const errorShow = cx({inputblock_header_errorMessage: true, error: error});


  useEffect(() => {
    if(props.num === 0) {
      inputRef.current.focus();
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
      ref={inputRef} 
      num={props.num}
      />
    </div>
  );
}

export { InputBlock };
