import { combineReducers } from "redux";

function newComments(state = [], action) {
  return state;
}
function newTasks(state = [], action) {
  return state;
}
function tickets(state = [], action) {
  return state;
}
function newOrders(state = [], action) {
  return state;
}

const rootReducer = combineReducers({
    newComments,
    newTasks,
    tickets,
    newOrders
});
export default rootReducer;