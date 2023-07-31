import React from "react";

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}
class WeatherApp extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     location: "Lisbon",
  //     isLoading: false,
  //     displayLocation: "",
  //     weather: {},
  //   };
  //   this.handleFetch = this.handleFetch.bind(this);
  //   this.fetchWeather = this.fetchWeather.bind(this);
  // }

  // Removing Boileparte Code With Class Field

  state = {
    // location: "Lisbon",
    location: "",
    isLoading: false,
    displayLocation: "",
    weather: {},
  };

  fetchWeather = async () => {
    if (this.state.location.length < 2) return this.setState({ weather: {} });
    try {
      // 1) Getting location (geocoding)
      this.setState({ isLoading: true });
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      // console.log(geoData);

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);
      this.setState({
        displayLocation: `${name} ${convertToFlag(country_code)}`,
      });

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      this.setState({ weather: weatherData.daily });
      // console.log(weatherData.daily);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
      // console.log(this);
    }
  };
  setLocation = (e) => {
    this.setState({ location: e.target.value });
  };

  // useEffect[]
  componentDidMount() {
    // this.fetchWeather();
    this.setState({ location: localStorage.getItem("location") || "" });
  }

  //useEffect[location]
  componentDidUpdate(prevProps, prevStates) {
    if (this.state.location !== prevStates.location) {
      this.fetchWeather();
      localStorage.setItem("location", this.state.location);
    }
  }
  render() {
    return (
      <div className="bg-slate-50-200 h-screen pt-24">
        <div className="mx-14  p-24 flex flex-col items-center gap-4 justify-center shadow-lg border-spacing-5  font-mono">
          <h1 className="text-5xl">Classy Weather</h1>
          <Input
            location={this.state.location}
            onChangeLocation={this.setLocation}
          />
          {/* <button
            className="px-4 py-2 bg-green-300 rounded-sm shadow-sm hover:bg-green-200 hover:border-double"
            onClick={this.fetchWeather}
          >
            Get Weather
          </button> */}
          {this.state.isLoading && <p>Loading ...</p>}

          {this.state.weather.weathercode && (
            <Weather
              weather={this.state.weather}
              location={this.state.location}
            />
          )}
        </div>
      </div>
    );
  }
}

export default WeatherApp;

class Input extends React.Component {
  render() {
    return (
      <div>
        <input
          className="bg-green-200 py-2 px-4 w-full text-gray-500"
          type="text"
          placeholder="Search From Location..."
          value={this.props.location}
          onChange={this.props.onChangeLocation}
        />
      </div>
    );
  }
}

class Weather extends React.Component {
  componentWillUnmount() {
    console.log("Weather will onmount");
  }
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;
    return (
      <div className="flex flex-col gap-2 text-center">
        <h2>Location {this.props.location}</h2>
        <ul className="flex flex-row flex-wrap gap-3 shadow-sm">
          {dates.map((date, i) => (
            <Day
              date={date}
              max={max.at(i)}
              min={min.at(i)}
              code={codes.at(i)}
              key={date}
              isToday={i === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class Day extends React.Component {
  render() {
    const { date, max, min, code, isToday } = this.props;
    return (
      <li className="bg-green-50 flex flex-col gap-4 py-4 shadow-sm rounded-lg px-6 hover:bg-green-100 cursor-pointer">
        <span className="text-7xl">{getWeatherIcon(code)}</span>
        <p className="text-2xl">{isToday ? "Today" : formatDay(date)}</p>
        <p>
          {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
        </p>
      </li>
    );
  }
}
