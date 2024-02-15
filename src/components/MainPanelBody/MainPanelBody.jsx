import { PersonalInfo } from "../PersonalInfo/PersonalInfo";

function MainPanelBody({ active }) {
  switch (active) {
    case 1:
      return <PersonalInfo />;
    default:
      return <></>;
  }
}

export { MainPanelBody };
