import s from "./PersonalInfo.module.scss";
import { InputBlock } from "../InputBlock/InputBlock";
import { inputLabels } from "../../data/inputLabels";

function PersonalInfo() {
  const inputs = inputLabels.map((label, i) => <InputBlock label={label} key = {i}/>)
  return (
    <main className={s.container}>
      {/* <InputBlock label={"Name"} />
      <InputBlock label={"Email address"} />
      <InputBlock label={"Phone number"} /> */}
      {inputs}
    </main>
  );
}

export { PersonalInfo };
