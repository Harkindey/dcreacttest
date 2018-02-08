import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WeatherDetails from './WeatherDetails';
import SunDetails from './SunDetails';
const Main = props => {
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <WeatherDetails {...props} />
          )}
        />
        <Route exact path="/sunrise" render={() => <SunDetails data={{ ...props.data.sys }} />} />
      </Switch>
    </main>
  );
};

export default Main;
