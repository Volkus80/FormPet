import { useSelector, useDispatch } from "react-redux";
import { termSelector } from "../../store/terms/termsSelectors";
import s from "./AddOn.module.scss";
import bind from "classnames/bind";

const cx = bind.bind(s);

function AddOn({ id, header, title, price, selected, clickHandler }) {
  const isMonthly = useSelector(termSelector);

  const addonPrice = isMonthly ? price : price * 10;
  const termName = isMonthly ? "mo" : "yr";

  const checkboxStyle = cx({
    addon_checkbox: true,
    checked: selected,
  });

  const addonStyle = cx({
    addon: true,
    selected,
  });

  return (
    <div className={addonStyle}>
      <label className={checkboxStyle}>
        <input
          type="checkbox"
          checked={selected}
          className={s.addon_checkbox_check}
          onChange={(id) => clickHandler(id)}
        />
      </label>
      <div className={s.addon_description}>
        <p className={s.addon_description_header}>{header}</p>
        <p className={s.addon_description_title}>{title}</p>
      </div>
      <p className={s.addon_price}>{`\+\$${addonPrice}\/${termName}`}</p>
    </div>
  );
}

export { AddOn };
