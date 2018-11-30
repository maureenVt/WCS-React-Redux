import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  onSwitchAdd1: () => dispatch({ type: "ADD1" }),
  onSwitchAdd10: () => dispatch({ type: "ADD10" }),
  onSwitchRemove1: () => dispatch({ type: "REMOVE1" }),
  onSwitchRemove10: () => dispatch({ type: "REMOVE10" }),
  onSwitchReset: () => dispatch({ type: "RESET" })
});

const CounterComponent = ({
  counter,
  onSwitchAdd1,
  onSwitchAdd10,
  onSwitchRemove1,
  onSwitchRemove10,
  onSwitchReset
}) => (
  <div>
    <p>{counter}</p>
    <button onClick={onSwitchAdd1}>ADD 1</button>
    <button onClick={onSwitchRemove1}>REMOVE 1</button>
    <button onClick={onSwitchAdd10}>ADD 10</button>
    <button onClick={onSwitchRemove10}>REMOVE 10</button>
    <button onClick={onSwitchReset}>RESET</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
