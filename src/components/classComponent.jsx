import React, { Component } from "react";
import * as ACTIONS from "../store/actions/actions";
import { connect } from "react-redux";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      local_state_prop1: true,
      local_state_prop2: 0,
    };
  }

  inc_local = () => {
    this.setState({ local_state_prop2: this.state.local_state_prop2 + 1 });
  };

  dec_local = () => {
    this.setState({ local_state_prop2: this.state.local_state_prop2 - 1 });
  };
  render() {
    return (
      <div>
        <button onClick={() => this.inc_local()}>INC Local State</button>
        <button onClick={() => this.dec_local()}>DEC Local State</button>
        <br />
        {this.state.local_state_prop2}
        <br />
        <br />
        <button onClick={() => this.props.inc_global()}>
          INC Global State
        </button>
        <button onClick={() => this.props.dec_global()}>
          DEC Global State
        </button>
        <br />
        {this.props.stateprop2}
        <br />
        <br />

        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
        <br />
        {this.props.stateprop1 ? (
          <p>stateprop1 is true</p>
        ) : (
          <p>stateprop1 is false</p>
        )}
        <br />
        <br />
        <button onClick={() => this.props.action_creator1()}>
          Dispatch Action Creator 1
        </button>
        <button onClick={() => this.props.action_creator2()}>
          Dispatch Action Creator 2
        </button>
        <br />
        {this.props.stateprop1 ? (
          <p>stateprop1 is true</p>
        ) : (
          <p>stateprop1 is false</p>
        )}
        <br />
        <br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateprop1: state.reducer1.stateprop1,
    stateprop2: state.reducer2.stateprop2,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
    inc_global: () => dispatch(ACTIONS.REDUX_INC),
    dec_global: () => dispatch(ACTIONS.REDUX_DEC),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent);
