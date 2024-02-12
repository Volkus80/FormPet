import s from "./StagesBoard.module.scss";
import Img from "../../images/bg-sidebar-desktop.svg";
import { SBItem } from "../SBItem/SBItem";

export default function StagesBoard() {
    return (
    <div className={s.board}>
        {/* <img src={Img} alt="bg" className={s.board_image}/> */}
        <SBItem itemNo={1} posText={"YOUR INFO"} active={false} />
    </div>
    )
}
