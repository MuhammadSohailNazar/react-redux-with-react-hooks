import * as ACTION_TYPES from '../actions/actionTypes'

export const initialState = {
  hooks_stateprop2: 0,
}

export const Reducer2 = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.LOCAL_INC:
        return {
          ...state,
          hooks_stateprop2: state.hooks_stateprop2 + 1
        }
      case ACTION_TYPES.LOCAL_DEC:
        return {
          ...state,
          hooks_stateprop2: state.hooks_stateprop2 - 1
        }
      default:
        throw new Error();
    }
}
