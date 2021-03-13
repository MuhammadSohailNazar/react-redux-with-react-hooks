import * as ACTION_TYPES from '../actions/actionTypes'

export const initialState = {
  context_prop1: 0,
}

export const ContextReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.CONTEXT_INC:
        return {
          ...state,
          context_prop1: state.context_prop1 + 1
        }
      case ACTION_TYPES.CONTEXT_DEC:
        return {
          ...state,
          context_prop1: state.context_prop1 - 1
        }
      default:
        throw new Error();
    }
}
