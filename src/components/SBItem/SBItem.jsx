import s from "./SBItem.module.scss";
import cn from "classnames";
import cnBind from "classnames/bind";
import { useSelector } from "react-redux";
import { stepSelector } from "../../store/steps/stepsSelectors";

const cx = cnBind.bind(s);

function SBItem({ itemNo, posText, active }) {
  const step = useSelector(stepSelector);
  const itemClassName = cx({
    item_num: true,
    active: step <= 4 ? itemNo === step : itemNo === 4,
  });

  return (
    <div className={s.item}>
      <div className={itemClassName}>{itemNo}</div>
      <div className={s.item_desc}>
        <p className={s.item_desc_header}>STEP {itemNo}</p>
        <p className={s.item_desc_footer}>{posText}</p>
      </div>
    </div>
  );
}

export { SBItem };
