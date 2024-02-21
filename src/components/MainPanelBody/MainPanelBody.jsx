import { PersonalInfo } from "../PersonalInfo/PersonalInfo";

function MainPanelBody({ step }) {
  switch (step) {
    case 1:
      return <PersonalInfo />;
    default:
      return <></>;
  }
}

export { MainPanelBody };
