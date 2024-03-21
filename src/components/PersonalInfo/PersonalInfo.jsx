import s from "./PersonalInfo.module.scss";
import { InputBlock } from "../InputBlock/InputBlock";
import { inputLabels } from "../../data/inputLabels";

function PersonalInfo() {
  const inputs = inputLabels.map((label, i) => <InputBlock label={label} key={i} num={i} />);
  return <main className={s.container}>{inputs}</main>;
}

export { PersonalInfo };
