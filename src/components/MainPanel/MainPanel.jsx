import { panelText } from "../../data/panelText";
import { ButtonBlock } from "../ButtonsBlock/ButtonBlock";
import { MainPanelBody } from "../MainPanelBody/MainPanelBody";
import s from "./MainPanel.module.scss";
import { useSelector } from "react-redux";
import { stepSelector } from "../../store/steps/stepsSelectors";

function MainPanel() {
  const step = useSelector(stepSelector);
  return panelText[step] ? (
    <div className={s.panel}>
      <header className={s.panel_header}>
        <p className={s.panel_header_head}>{panelText[step].header}</p>
        <p className={s.panel_header_description}>{panelText[step].text}</p>
      </header>
      <MainPanelBody step={step} />
      <ButtonBlock />
    </div>
  ) : null;
}

export { MainPanel };
