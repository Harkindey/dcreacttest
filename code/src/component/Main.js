import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WeatherDetails from './WeatherDetails';
import SunDetails from './SunDetails';
const Main = props => {
  let main_data = { ...props.data.main },
    location = props.data.name,
    weather = { ...props.data.weather },
    wind = { ...props.data.wind },
    measure_date = props.data.dt,
    changeUnit = props.changeUnit,
    unit = props.unit,
    sys = { ...props.data.sys };

  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <WeatherDetails data={{ ...main_data, ...weather[0], location, ...wind, measure_date, changeUnit, unit }} />
          )}
        />
        <Route exact path="/sunrise" render={() => <SunDetails data={{ ...sys }} />} />
      </Switch>
    </main>
  );
};

export default Main;
