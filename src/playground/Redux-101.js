//import { createStore } from 'redux';


// Counter Example from Lecture Videos


// const incrementCount = ({incrementBy = 1} = {}) => ({type: 'INCREMENT', incrementBy});
//
// const decrementCount = ({decrementBy = 1} = {}) => ({type: 'DECREMENT', decrementBy});
//
// const setCount = ({count}) => ({type: "SET", count});
//
// const resetCount = () => ({type: 'RESET'});
//
// const countReducer = (state = {count:0}, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + action.incrementBy
//       };
//
//       break;
//
//     case 'DECREMENT':
//       return {
//         count: state.count - action.decrementBy
//       };
//
//       break;
//
//     case 'SET':
//       return {
//         count: action.count
//       }
//       break;
//
//     case 'RESET':
//     return {
//       count: 0
//     };
//
//       break;
//     default:
//       return state
//
//   }
// };
// const store = createStore(countReducer);
//
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
//
//
//
// store.dispatch(incrementCount({ incrementBy: 5 }));
// store.dispatch(incrementCount());
//
// store.dispatch(resetCount());
//
// store.dispatch(decrementCount());
// store.dispatch(decrementCount({ decrementBy: 10 }));
//
// store.dispatch(setCount({ count: 101 }));


// Counter Example from The textbook


function reducer(state, action){
  if(action.type === 'INCREMENT'){
    return state + action.amount;
  }else if (action.type === 'DECREMENT') {
    return state - action.amount;
  }else{
    return state;
  }
}

function createStore(reducer){
  let state = 0;

  const getState = () => (state);

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  return {getState, dispatch};
};

const incrementAction = {type: 'INCREMENT', amount: 3};
const decrementAction = {type: 'DECREMENT', amount: 4};

const store = createStore(reducer);

console.log("Testing incrementAction");
console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());


console.log("Testing decrementAction");
store.dispatch(decrementAction);
console.log(store.getState());
store.dispatch(decrementAction);
console.log(store.getState());
