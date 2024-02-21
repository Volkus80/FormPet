import { PersonalInfo } from "../PersonalInfo/PersonalInfo";
import { SelectPlan } from "../SelectPlan/SelectPlan";

function MainPanelBody({ step }) {
    switch (step) {
        case 1:
            return <PersonalInfo />;
        case 2:
            return <SelectPlan />;
        default:
            return <></>;
    }
}

export { MainPanelBody };
