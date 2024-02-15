import { panelText } from "../../data/panelText";
import { InputBlock } from "../InputBlock/InputBlock";
import { ButtonBlock } from "../ButtonsBlock/ButtonBlock";
import { MainPanelBody } from "../MainPanelBody/MainPanelBody";
import cn from "classnames";
import bind from "classnames/bind";
import s from "./MainPanel.module.scss";

const cx = bind.bind(s);
function MainPanel({ active = 1 }) {
  return (
    <div className={s.panel}>
      <div className={s.panel_header}>
        <p className={s.panel_header_head}>{panelText[active].header}</p>
        <p className={s.panel_header_description}>{panelText[active].text}</p>
      </div>
      <MainPanelBody active={active} />
      <ButtonBlock />
    </div>
  );
}

export { MainPanel };
