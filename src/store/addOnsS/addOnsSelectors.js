const addOnsSelector = (state) => state.addOns;
const selectedAddOnsSelector = (state) =>
  state.addOns.filter((addon) => addon.selected);

export { addOnsSelector, selectedAddOnsSelector };
