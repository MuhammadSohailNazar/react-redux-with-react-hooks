import * as ACTION_TYPES from "./actionTypes";

export const SUCCESS = {
  type: ACTION_TYPES.SUCCESS,
};

export const FAILURE = {
  type: ACTION_TYPES.FAILURE,
};

export const CONTEXT_INC = {
  type: ACTION_TYPES.CONTEXT_INC,
};

export const CONTEXT_DEC = {
  type: ACTION_TYPES.CONTEXT_DEC,
};

export const LOCAL_INC = {
  type: ACTION_TYPES.LOCAL_INC,
};

export const LOCAL_DEC = {
  type: ACTION_TYPES.LOCAL_DEC,
};

export const REDUX_INC = {
  type: ACTION_TYPES.REDUX_INC,
};

export const REDUX_DEC = {
  type: ACTION_TYPES.REDUX_DEC,
};

export const success = () => {
  return {
    type: ACTION_TYPES.SUCCESS,
  };
};

export const failure = () => {
  return {
    type: ACTION_TYPES.FAILURE,
  };
};
