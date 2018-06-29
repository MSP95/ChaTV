import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';


function root_reducer(state0, action) {

  let reducer = combineReducers({sample});
  let state1 = reducer(state0, action);
  console.log("ReduxState", state1);
  return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;


function sample(state = null, action){
  switch(action.type){
    case 'SAMPLE_ACTION':
    return null;
    default:
    return null;
  }
}
