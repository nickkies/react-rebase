import React, { useReducer } from 'react';

export default function Reducer() {
  const initialState = { count: 0, name: 'nick' };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'reset':
        return initialState;
      case 'increament':
        return { count: state.count + 1, name: 'jessy' };
      case 'decreament':
        return { count: state.count - 1, name: 'joon, jin' };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Name: {state.name}
      <br />
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'decreament' })}>-</button>
      <button onClick={() => dispatch({ type: 'increament' })}>+</button>
    </div>
  );
}
