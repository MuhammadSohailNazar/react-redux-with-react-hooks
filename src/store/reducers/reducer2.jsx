import * as ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  stateprop2: 0,
};

const Reducer2 = (state = initialState, action) => {
console.log("🚀 ~ action", action)
  switch (action.type) {
    case ACTION_TYPES.REDUX_INC:
      return {
        ...state,
        stateprop2: state.stateprop2 + 1,
      };
    case ACTION_TYPES.REDUX_DEC:
      return {
        ...state,
        stateprop2: state.stateprop2 - 1,
      };
    default:
      return state;
  }
};

export default Reducer2;
