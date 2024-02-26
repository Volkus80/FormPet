import { useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
import { monthlyAction } from "../../store/terms/termsActions";
import s from "./TermToggle.module.scss";
import bind from "classnames/bind";
// import { MONTHLY } from "../../store/terms/termsConstants";

const cx = bind.bind(s);

function TermToggle({ isMonthly }) {
  const dispatch = useDispatch();
  // const [checked, setChecked] = useState(false);
  const monthlyStyle = cx({ title: true, title_active: isMonthly });
  const yearlyStyle = cx({ title: true, title_active: !isMonthly });
  const termtoggleStyle = cx({
    termtoggle: true,
    termtoggle_yearly: !isMonthly,
  });

  return (
    <div className={s.container}>
      <p className={monthlyStyle}>Monthly</p>
      <label className={termtoggleStyle}>
        <input
          type="checkbox"
          className={s.check}
          checked={isMonthly}
          onChange={() => dispatch(monthlyAction)}
        />
      </label>
      <p className={yearlyStyle}>Yearly</p>
    </div>
  );
}

export { TermToggle };
