import { Button } from "../Button/Button";
import s from "./ButtonBlock.module.scss";
// import cn from "classnames";
import bind from "classnames/bind";

const cx = bind.bind(s);

function ButtonBlock() {
  const forwardButtonStyles = cx({
    button: true,
    button_forward: true,
  });
  const backButtonStyle = cx({
    button: true,
    button_back: true,
  });
  return (
    <div className={s.buttons}>
      <button className={forwardButtonStyles}>Next Step</button>
      <button className={backButtonStyle}>Go Back</button>
    </div>
  );
}

export { ButtonBlock };
