import { createContext, useContext, useState } from "react";

//1  Create Context
const counterContext = createContext();

// 2 Create Parrent Component
const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <counterContext.Provider value={{ count, incrase, decrease }}>
      <span>{children}</span>
    </counterContext.Provider>
  );
};

//  3. Create Child Component to help implementing the common task

const Count = () => {
  const { count } = useContext(counterContext);
  return <span>{count}</span>;
};
const Label = ({ children }) => {
  return <span>{children}</span>;
};
const Incrase = ({ icon }) => {
  const { incrase } = useContext(counterContext);
  return <button onClick={incrase}>{icon}</button>;
};
const Decrease = ({ icon }) => {
  const { decrease } = useContext(counterContext);
  return <button onClick={decrease}>{icon}</button>;
};

// 4. Add Child Components as properties to parrent component

Counter.Count = Count;
Counter.Label = Label;
Counter.Incrase = Incrase;
Counter.Decrease = Decrease;
export default Counter;
