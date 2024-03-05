import s from "./ButtonBlock.module.scss";
// import cn from "classnames";
import bind from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { stepDown, stepUp } from "../../store/steps/stepsActions";
import { stepSelector } from "../../store/steps/stepsSelectors";

const cx = bind.bind(s);

function ButtonBlock() {
  const dispatch = useDispatch();
  const step = useSelector(stepSelector);

  const forwardButtonStyles = cx({
    button: true,
    button_forward: true,
    button_forward_confirm: step === 4,
  });

  const backButtonStyle = cx({
    button: true,
    button_back: true,
    button_back_hide: step === 1,
  });

  let forwardButtonText = step < 4 ? "Next Step" : "Confirm";

  return (
    <footer className={s.buttons}>
      <button className={forwardButtonStyles} onClick={() => dispatch(stepUp)}>
        {forwardButtonText}
      </button>
      <button className={backButtonStyle} onClick={() => dispatch(stepDown)}>
        Go Back
      </button>
    </footer>
  );
}

export { ButtonBlock };
