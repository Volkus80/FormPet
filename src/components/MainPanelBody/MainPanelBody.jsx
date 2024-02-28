import { PersonalInfo } from "../PersonalInfo/PersonalInfo";
import { SelectPlan } from "../SelectPlan/SelectPlan";
import { AddOnsList } from "../AddOnsList/AddOnsList";

function MainPanelBody({ step }) {
  switch (step) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <SelectPlan />;
    case 3:
      return <AddOnsList />;
    default:
      return <></>;
  }
}

export { MainPanelBody };
