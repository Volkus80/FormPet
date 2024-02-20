import s from "./StagesBoard.module.scss";
import { SBItem } from "../SBItem/SBItem";

export default function StagesBoard() {
    return (
    <div className={s.board}>
        <SBItem itemNo={1} posText={"YOUR INFO"} active={1} />
        <SBItem itemNo={2} posText={"SELECT PLAN"} active={1} />
        <SBItem itemNo={3} posText={"ADD-ONS"} active={1} />
        <SBItem itemNo={4} posText={"SUMMARY"} active={1} />
    </div>
    )
}
