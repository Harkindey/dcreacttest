import React, { Component } from 'react';
import _ from 'lodash'
import './App.css';
import 'weather-icons/css/weather-icons.min.css';
import 'bulma/css/bulma.css';
import Header from './component/Header';
import Main from './component/Main';
import api from './utils/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      forcast: {},
      unit: ''
    };
  }
  componentWillMount() {
    this.chooseUnit('metric');
  }
  chooseUnit = unit => {
    api
      .getWeatherInfo(unit)
      .then(data => {
        this.setState({
          forcast: data,
          unit: unit === 'metric' ? { deg: 'C', dis: 'km/h' } : { deg: 'F', dis: 'mile/h' }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className=" App container is-widescreen">
        <Header />
        {this.state.forcast === undefined || _.isEmpty(this.state.forcast)   ? (
          <main className="page_wait">
            <div className="loader" />
          </main>
        ) : (
          <Main data={this.state.forcast} changeUnit={this.chooseUnit} unit={this.state.unit} />
        )}
      </div>
    );
  }
}

export default App;
