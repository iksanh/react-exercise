import React from "react";

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((currentState) => {
      return { count: currentState.count - 1 };
    });
  }
  handleIncrement() {
    this.setState((currentState) => {
      return { count: currentState.count + 1 };
    });
  }

  render() {
    const date = new Date("juni 27 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div className="flex items-center justify-center mt-24 gap-5">
        <button
          className="p-4 bg-red-200 rounded-sm shadow-sm text-black"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button
          className="p-4 bg-green-200 rounded-sm shadow-sm text-black"
          onClick={this.handleIncrement}
        >
          +
        </button>
      </div>
    );
  }
}

export default WeatherApp;
