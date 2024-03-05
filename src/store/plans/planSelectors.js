const planSelector = (state) => state.plan;

const selectedPlanSelector = (state) => state.plan.find((p) => p.selected);

export { planSelector, selectedPlanSelector };
