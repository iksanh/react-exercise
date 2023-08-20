import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }

  // return state + action;
};

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, count } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    // if (count < 0) return;
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="bg-gray-200  h-screen flex flex-col justify-center items-center">
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

      <div className="border-4 flex flex-row gap-[2px] items-center">
        <button onClick={dec} className="bg-slate-300 px-2 py-1 rounded-sm">
          -
        </button>
        <input value={count} onChange={defineCount} className="px-2 py-1" />
        <button onClick={inc} className="bg-slate-300 px-2 py-1 rounded-sm">
          +
        </button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button
          className="bg-slate-50 rounded-sm mt-3 px-10 py-1 w-full"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default DateCounter;
