import * as ACTION_TYPES from '../actions/actionTypes'

export const initialState = {
  hooks_stateprop1: false,
}

export const Reducer1 = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.SUCCESS:
        return {
          ...state,
          hooks_stateprop1: true,
        }
      case ACTION_TYPES.FAILURE:
        return {
          ...state,
          hooks_stateprop1: false,
        }
      default:
        throw new Error();
    }
}
