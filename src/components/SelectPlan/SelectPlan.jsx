import { Plan } from "../Plan/Plan";
import { plans } from "../../data/plans";
import s from "./SelectPlan.module.scss";
import { useSelector } from "react-redux";
import { termSelector } from "../../store/terms/termsSelectors";
import { TermToggle } from "../TermToggle/TermToggle";

function SelectPlan() {
  const isMonthly = useSelector(termSelector);
  const plansList = plans.map((p) => (
    <Plan
      key={p.id}
      id={p.id}
      name={p.name}
      cost={p.price}
      image={p.image}
      isMonthly={isMonthly}
    />
  ));
  return (
    <div className={s.select}>
      <div className={s.select_items}>{plansList}</div>
      <TermToggle isMonthly={isMonthly} />
    </div>
  );
}

export { SelectPlan };
