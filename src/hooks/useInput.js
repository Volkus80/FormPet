import { useRef, useState } from "react";

export const useInput = (validator) => {
  const [value, setValue] = useState("");
  const [error, setErr] = useState(false);
  const ref = useRef();

  const onChange = (e) => setValue(e.target.value);
  const onBlur = () => (!validator(value) ? setErr(true) : setErr(false));
  const onFocus = () => setErr(false);

  return { value, ref, error, onChange, onBlur, onFocus };
};
