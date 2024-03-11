import s from "./Finishing.module.scss";
import bind from "classnames/bind";
import { useSelector } from "react-redux";
import { termSelector } from "../../store/terms/termsSelectors";
import { selectedPlanSelector } from "../../store/plans/planSelectors";
import { addOnsSelector } from "../../store/addOnsS/addOnsSelectors";
import { FinishAddon } from "../FinishAddon/FinishAddon";
import { usePrice } from "../../hooks/usePrice";

const cx = bind.bind(s);

function Finishing() {
  const monthly = useSelector(termSelector);
  const addOns = useSelector(addOnsSelector).filter(addon => addon.selected);
  const plan = useSelector(selectedPlanSelector);

  const addOnsList = addOns.map((addon) => (
    <FinishAddon
      key={addon.id}
      title={addon.header}
      cost={addon.price}
      // className={s.item}
    />
  ));

  const planPrice = usePrice(plan.price);
  const addonsTotalPrice = addOns.reduce((prev, next) => prev + next.price, 0);
  const totalPrice = usePrice(plan.price + addonsTotalPrice);

  const planStyle = cx({finishing_info_item_plan: true, item: true});
  const borderStyle = cx({border: true, item: true, active: addOnsList.length > 0});

  return (
    <main className={s.finishing}>
      <div className={s.finishing_info}>
        <div className={planStyle}>
          <div className={s.plan_description}>
            <p className={s.plan_description_title}>
              {plan.name + ` (${monthly ? "Monthly" : "Yearly"})`}
            </p>
            <button className={s.plan_description_change}>Change</button>
          </div>
          <p className={s.plan_price}>{planPrice}</p>
        </div>
        <div className={borderStyle} />
        {addOnsList}
      </div>
      <div className={s.finishing_total}>
        <p className={s.finishing_total_name}>{`Total (per ${
          monthly ? "month" : "year"
        })`}</p>
        <p className={s.finishing_total_price}>+{totalPrice}</p>
      </div>
    </main>
  );
}

export { Finishing };
