import { Plan } from "../Plan/Plan";
// import { plans } from "../../data/plans";
import s from "./SelectPlan.module.scss";
import { useSelector } from "react-redux";
import { termSelector } from "../../store/terms/termsSelectors";
import { planSelector } from "../../store/plans/planSelectors";
import { TermToggle } from "../TermToggle/TermToggle";

function SelectPlan() {
  const isMonthly = useSelector(termSelector);
  const plans = useSelector(planSelector);
  const plansList = plans.map((p) => (
    <Plan
      key={p.id}
      id={p.id}
      name={p.name}
      cost={p.price}
      image={p.image}
      isMonthly={isMonthly}
      selected={p.selected}
    />
  ));
  return (
    <main className={s.select}>
      <div className={s.select_items}>{plansList}</div>
      <TermToggle isMonthly={isMonthly} />
    </main>
  );
}

export { SelectPlan };
