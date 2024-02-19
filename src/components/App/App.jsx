import StagesBoard from "../StageBoard/StagesBoard";
import s from "./App.module.scss";
import { MainPanel } from "../MainPanel/MainPanel";

function App() {
  return (
    <div className={s.app}>
      <StagesBoard />
      <MainPanel />
    </div>
  );
}

export default App;
