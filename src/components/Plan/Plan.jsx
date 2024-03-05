import s from "./Plan.module.scss";
import bind from "classnames/bind";
import { useDispatch } from "react-redux";
import { setPlanAction } from "../../store/plans/planActions";
import { usePrice } from "../../hooks/usePrice";

const cx = bind.bind(s);

function Plan({ id, name, cost, image, isMonthly, selected = false }) {
  const dispatch = useDispatch();
  const costTitle = usePrice(cost);

  const planStyle = cx({
    plan: true,
    plan_selected: selected,
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
