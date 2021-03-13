import React, { useContext, useState, useEffect, useReducer } from "react";
import * as ACTIONS from "../store/actions/actions";
import * as Reducer1 from "../store/hooksReducers/reducer1Hooks";
import * as Reducer2 from "../store/hooksReducers/reducer2Hooks";
import Context from "../utils/context";

const FunctionalComponent = () => {
  //react local state
  const [value, setValue] = useState({
    local_state_prop1: true,
    local_state_prop2: 0,
  });

  // seperate usestate call for unrelated state
  const [useEffectValue, setUseEffectValue] = useState("");

  const [stateLocal1, dispatchLocal1] = useReducer(
    Reducer1.Reducer1,
    Reducer1.initialState
  );

  const [stateLocal2, dispatchLocal2] = useReducer(
    Reducer2.Reducer2,
    Reducer2.initialState
  );

  const context = useContext(Context);

  useEffect(() => {
    setTimeout(() => setUseEffectValue("useEffect Worked"), 3000);
  }, []);

  const incrementValue_uS = () => {
    setValue({ ...value, local_state_prop2: value.local_state_prop2 + 1 });
  };

  const decrementValue_uS = () => {
    setValue({ ...value, local_state_prop2: value.local_state_prop2 - 1 });
  };

  const incrementValue_uR = () => {
    dispatchLocal2(ACTIONS.LOCAL_INC);
  };

  const decrementValue_uR = () => {
    dispatchLocal2(ACTIONS.LOCAL_DEC);
  };

  const handleDispatchTrue = () => {
    // dispatchLocal(type : "SUCCESS");
    // dispatchLocal(ACTIONS.SUCCESS);
    dispatchLocal1(ACTIONS.success());
  };

  const handleDispatchFalse = () => {
    // dispatchLocal(type : "FAILURE");
    // dispatchLocal(ACTIONS.FAILURE);
    dispatchLocal1(ACTIONS.failure());
  };

  return (
    <div>
      <div>
        <button onClick={() => incrementValue_uS()}>
          {" "}
          Add Local Value uS{" "}
        </button>
        <button onClick={() => decrementValue_uS()}> Dec Local Value uS</button>
        <br />
        <p>Local useState Value: {value.local_state_prop2}</p>
        <br />
        <button onClick={() => incrementValue_uR()}> Add Local Value uR</button>
        <button onClick={() => decrementValue_uR()}> Dec Local Value uR</button>
        <br />
        <p>Local useReducer Value: {stateLocal2.hooks_stateprop2}</p>
        <br />
        <button onClick={() => context.addGlobalValue_uS()}>
          {" "}
          Add Global Value uS{" "}
        </button>
        <button onClick={() => context.decGlobalValue_uS()}>
          {" "}
          Dec Global Value uS{" "}
        </button>
        <br />
        <p>Global useState Value: {context.valueGlobalState_uS}</p>
        <br />
        <button onClick={() => context.addGlobalValue_uR()}>
          {" "}
          Add Global Value uR{" "}
        </button>
        <button onClick={() => context.decGlobalValue_uR()}>
          {" "}
          Dec Global Value uR{" "}
        </button>
        <br />
        <p>
          Global useReducer Value: {context.valueGlobalState_uR.context_prop1}
        </p>
        <br />
        <button onClick={() => handleDispatchTrue()}>
          Dispatch Local True{" "}
        </button>
        <button onClick={() => handleDispatchFalse()}>
          Dispatch Local False{" "}
        </button>
        <br />
        {stateLocal1.hooks_stateprop1 ? (
          <p> stateprop1 is true </p>
        ) : (
          <p> stateprop1 is false </p>
        )}
        <br />
        {useEffectValue ? <p> {useEffectValue}</p> : <p> No value </p>}
        <br />
      </div>
    </div>
  );
};

export default FunctionalComponent;
