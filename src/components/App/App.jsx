import StagesBoard from "../StageBoard/StagesBoard";
import s from "./App.module.scss";
import { MainPanel } from "../MainPanel/MainPanel";
import { LastPage } from "../LastPage/LastPage";
import { stepSelector } from "../../store/steps/stepsSelectors";
import { useSelector } from "react-redux";

function App() {
  const step = useSelector(stepSelector);
  return (
    <div className={s.app}>
      <StagesBoard />
      {step < 5 ? <MainPanel /> : <LastPage />}
    </div>
  );
}

export default App;
