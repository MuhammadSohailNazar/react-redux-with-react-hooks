import React, { useState, useReducer } from "react";
import ClassComponent from "./components/classComponent";
import * as ACTIONS from "./store/actions/actions";
import FunctionalComponent from "./components/functionalComponent";
import * as ContextReducer from "./store/hooksReducers/contextReducer";
import Context from "./utils/context";

const App = () => {
  const [valueGlobal_uS, setValueGlobal_uS] = useState(0);
  const [contextState, contextDispatch] = useReducer(
    ContextReducer.ContextReducer,
    ContextReducer.initialState
  );

  const incrementValueGlobal_uS = () => {
    setValueGlobal_uS(valueGlobal_uS + 1);
  };

  const decrementValueGlobal_uS = () => {
    setValueGlobal_uS(valueGlobal_uS - 1);
  };

  const dispatchContextInc = () => {
    contextDispatch(ACTIONS.CONTEXT_INC);
  };

  const dispatchContextDec = () => {
    contextDispatch(ACTIONS.CONTEXT_DEC);
  };

  return (
    <div>
      <Context.Provider
        value={{
          //global state with useState
          valueGlobalState_uS: valueGlobal_uS,
          addGlobalValue_uS: () => incrementValueGlobal_uS(),
          decGlobalValue_uS: () => decrementValueGlobal_uS(),

          //global state with useReducer
          valueGlobalState_uR: contextState,
          addGlobalValue_uR: () => dispatchContextInc(),
          decGlobalValue_uR: () => dispatchContextDec(),
        }}
      >
        <div style={{ padding: "50px" }}>
          <h3>React Hooks</h3>
          <FunctionalComponent />
        </div>
      </Context.Provider>
      <div style={{ padding: "50px" }}>
        <h3> React Class </h3>
        <ClassComponent />
      </div>
    </div>
  );
};

export default App;
