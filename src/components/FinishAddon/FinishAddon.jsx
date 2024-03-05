import s from "./FinishAddon.module.scss";
import { usePrice } from "../../hooks/usePrice";

function FinishAddon({ title, cost }) {
  const price = usePrice(cost, true);

  return (
    <div className={s.finishing_addon}>
      <p className={s.finishing_addon_title}>{title}</p>
      <p className={s.finishing_addon_price}>{price}</p>
    </div>
  );
}

export { FinishAddon };
