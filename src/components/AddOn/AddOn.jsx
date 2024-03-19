import { useDispatch } from "react-redux";
import { selectAddOn } from "../../store/addOnsS/addOnsActions";
import { usePrice } from "../../hooks/usePrice";
import s from "./AddOn.module.scss";
import bind from "classnames/bind";

const cx = bind.bind(s);

function AddOn({ id, header, title, price, selected }) {
  const dispatch = useDispatch();

  const addonPrice = usePrice(price, true);
 
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
          onChange={() => dispatch(selectAddOn(id))}
        />
      </label>
      <div className={s.addon_description}>
        <p className={s.addon_description_header}>{header}</p>
        <p className={s.addon_description_title}>{title}</p>
      </div>
      <p className={s.addon_price}>{addonPrice}</p>
    </div>
  );
}

export { AddOn };
