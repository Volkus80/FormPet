import StagesBoard from "../StageBoard/StagesBoard";
import s from "./App.module.scss";
import { MainPanel } from "../MainPanel/MainPanel";
import { LastPage } from "../LastPage/LastPage";

function App() {
  return (
    <div className={s.app}>
      <StagesBoard />
      {<MainPanel /> || <LastPage />}
    </div>
  );
}

export default App;
