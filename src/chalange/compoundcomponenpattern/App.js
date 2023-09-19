import Counter from "./Counter";

function AppCompundComponentPattern() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}

      <Counter>
        <Counter.Label>My Super Flexible counter </Counter.Label>
        <div>
          <Counter.Decrease icon="-" />
          <Counter.Count />
          <Counter.Incrase icon="+" />
        </div>
      </Counter>
    </div>
  );
}

export default AppCompundComponentPattern;
