import s from "./Plan.module.scss";
import bind from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { planSelector } from "../../store/plans/planSelectors";
import { setPlanAction } from "../../store/plans/planActions";

const cx = bind.bind(s);

function Plan({ id, name, cost, image, isMonthly }) {
  const dispatch = useDispatch();
  const selectedPlan = useSelector(planSelector);
  const period = isMonthly ? "mo" : "yr";
  const rate = isMonthly ? 1 : 10;
  const costTitle = `$${cost * rate}/${period}`;

  const planStyle = cx({
    plan: true,
    plan_selected: id === selectedPlan,
  });

  const titleStyle = cx({
    title: true,
    active: isMonthly,
  });

  const setPlan = (id) => dispatch(setPlanAction(id));

  return (
    <div className={planStyle} onClick={() => setPlan(id)}>
      <img src={image} className={s.plan_icon} alt="icon" />
      <div className={s.description}>
        <p className={s.name}>{name}</p>
        <p className={s.cost}>{costTitle}</p>
        <p className={titleStyle}>2 months free</p>
      </div>
    </div>
  );
}

export { Plan };
