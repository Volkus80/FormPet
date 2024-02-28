import { AddOn } from "../AddOn/AddOn";
import { addOns } from "../../data/addOns";
import { useState } from "react";

function AddOnsList() {
  const [addonslist, setAddOns] = useState(addOns);

  const addOnHandler = (id) =>
    setAddOns(
      addonslist.map((ao) =>
        ao.id === id ? { ...ao, selected: !ao.selected } : ao
      )
    );

  const list = addOns.map((item) => (
    <AddOn
      key={item.id}
      id={item.id}
      header={item.header}
      title={item.title}
      selected={item.selected}
      price={item.price}
      clickHandler={addOnHandler}
    />
  ));

  return <div className="addons">{list}</div>;
}

export { AddOnsList };
