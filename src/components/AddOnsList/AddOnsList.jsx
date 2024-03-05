import { useSelector } from "react-redux";
import { addOnsSelector } from "../../store/addOnsS/addOnsSelectors";
import { AddOn } from "../AddOn/AddOn";

function AddOnsList() {
  const addonslist = useSelector(addOnsSelector);

  const list = addonslist.map((item) => (
    <AddOn
      key={item.id}
      id={item.id}
      header={item.header}
      title={item.title}
      selected={item.selected}
      price={item.price}
      // clickHandler={addOnHandler}
    />
  ));

  return <main className="addons">{list}</main>;
}

export { AddOnsList };
