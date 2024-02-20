import s from "./ButtonBlock.module.scss";
// import cn from "classnames";
import bind from "classnames/bind";
import { useDispatch } from "react-redux";
import { stepDown, stepUp } from "../../store/steps/stepsActions";

const cx = bind.bind(s);

function ButtonBlock() {
    const dispatch = useDispatch();

    const forwardButtonStyles = cx({
        button: true,
        button_forward: true
    });

    const backButtonStyle = cx({
        button: true,
        button_back: true
    });

    return (
        <div className={s.buttons}>
            <button className={forwardButtonStyles} onClick={() => dispatch(stepUp)}>
                Next Step
            </button>
            <button className={backButtonStyle} onClick={() => dispatch(stepDown)}>
                Go Back
            </button>
        </div>
    );
}

export { ButtonBlock };
