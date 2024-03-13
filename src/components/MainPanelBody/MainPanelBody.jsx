import { PersonalInfo } from "../PersonalInfo/PersonalInfo";
import { SelectPlan } from "../SelectPlan/SelectPlan";
import { AddOnsList } from "../AddOnsList/AddOnsList";
import { Finishing } from "../Finishing/Finishing";
import { LastPage } from "../LastPage/LastPage";

function MainPanelBody({ step }) {
  switch (step) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <SelectPlan />;
    case 3:
      return <AddOnsList />;
    case 4:
      return <Finishing />;
    default:
      return <></>;
  }
}

export { MainPanelBody };
