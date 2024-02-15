import s from "./PersonalInfo.module.scss";
import { InputBlock } from "../InputBlock/InputBlock";

function PersonalInfo() {
  return (
    <div className={s.container}>
      <InputBlock label={"Name"} />
      <InputBlock label={"Email address"} />
      <InputBlock label={"Phone number"} />
    </div>
  );
}

export { PersonalInfo };
