import { useReducer } from "react";

function DateCounter() {
  function reducer(state, action) {
    // console.log(state, action);
    switch (action.type) {
      case "inc":
        return { ...state, count: state.count + state.step };
      case "dec":
        return { ...state, count: state.count - state.step };
      case "setCount":
        return { ...state, count: action.payload };
      case "setStep":
        return { ...state, step: action.payload };
      case "reset":
        // return { count: 0, step: 0 };
        return initalState;
      default:
        return new Error("Unknown Action");
    }
  }
  const initalState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initalState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("June 12 2021");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
