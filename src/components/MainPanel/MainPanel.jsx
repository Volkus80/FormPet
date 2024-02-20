import { panelText } from "../../data/panelText";
import { InputBlock } from "../InputBlock/InputBlock";
import { ButtonBlock } from "../ButtonsBlock/ButtonBlock";
import { MainPanelBody } from "../MainPanelBody/MainPanelBody";
import cn from "classnames";
import bind from "classnames/bind";
import s from "./MainPanel.module.scss";
import { UseSelector, useSelector } from "react-redux";
import { stepSelector } from "../../store/steps/stepsSelectors";

const cx = bind.bind(s);
function MainPanel() {
  const step = useSelector(stepSelector);
  return (
    <div className={s.panel}>
      <div className={s.panel_header}>
        <p className={s.panel_header_head}>{panelText[step].header}</p>
        <p className={s.panel_header_description}>{panelText[step].text}</p>
      </div>
      <MainPanelBody step={step} />
      <ButtonBlock />
    </div>
  );
}

export { MainPanel };
