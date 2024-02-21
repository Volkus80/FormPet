import { Plan } from "../Plan/Plan";
import { plans } from "../../data/plans";
import s from "./SelectPlan.module.scss";
import { useSelector } from "react-redux";
import { termSelector } from "../../store/terms/termsSelectors";

function SelectPlan() {
    const term = useSelector(termSelector);
    const plansList = plans.map((p) => <Plan key={p.id} name={p.name} cost={p.price} image={p.image} term={term} />);
    return (
        <div className={s.select}>
            <div className={s.select_items}>{plansList}</div>
        </div>
    );
}

export { SelectPlan };
