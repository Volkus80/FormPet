import {SET_PLAN} from './plansConstants';

 const setPlanAction = (planId) => (
    {type: SET_PLAN,
    planId}
);

export {setPlanAction};