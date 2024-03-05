import s from "./Finishing.module.scss";
import bind from "classnames/bind";
import { useSelector } from "react-redux";
import { termSelector } from "../../store/terms/termsSelectors";
import { selectedPlanSelector } from "../../store/plans/planSelectors";
import { selectedAddOnsSelector } from "../../store/addOnsS/addOnsSelectors";
import { FinishAddon } from "../FinishAddon/FinishAddon";
import { usePrice } from "../../hooks/usePrice";

const cx = bind.bind(s);

function Finishing() {
  const monthly = useSelector(termSelector);
  const addOns = useSelector(selectedAddOnsSelector);
  const plan = useSelector(selectedPlanSelector);

  const addOnsList = addOns.map((addon) => (
    <FinishAddon
      key={addon.id}
      title={addon.title}
      cost={addon.price}
      className={s.item}
    />
  ));

  const planPrice = usePrice(plan.price);
  const addonsTotalPrice = addOns.reduce((prev, next) => prev + next.price, 0);
  const totalPrice = usePrice(plan.price + addonsTotalPrice);

  return (
    <main className={s.finishing}>
      <div className={s.finishing_info}>
        <div className="finishing_info_item plan">
          <div className="plan_description">
            <p className="plan_description_title">
              {plan.name + `(${monthly ? "Monthly" : "Yearly"})`}
            </p>
            <button className="plan_description_change">Change</button>
          </div>
          <p className="plan_price">{planPrice}</p>
        </div>
        <div className="border item"></div>
        {addOnsList}
      </div>
      <div className="finishing_total">
        <p className="finishing_total_name">{`Total(${
          monthly ? "month" : "year"
        })`}</p>
        <p className="finishing_total_price">{totalPrice}</p>
      </div>
    </main>
  );
}

export { Finishing };
