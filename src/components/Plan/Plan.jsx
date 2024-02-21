import s from "./Plan.module.scss";
import bind from "classnames/bind";
import { MONTHLY } from "../../store/terms/termsConstants";
const cx = bind.bind(s);

function Plan({ name, cost, image, term }) {
    const monthly = term === MONTHLY;
    const period = monthly ? "mo" : "yr";
    const rate = monthly ? 1 : 10;
    const costTitle = "$" + cost * rate + "/" + period;

    const titleStyle = cx({
        title: true,
        active: monthly
    });

    return (
        <div className={s.plan}>
            <img src={image} className={s.plan_icon} alt='icon' />
            <div className={s.description}>
                <p className={s.name}>{name}</p>
                <p className={s.cost}>{costTitle}</p>
                <p className={titleStyle}>2 months free</p>
            </div>
        </div>
    );
}

export { Plan };
