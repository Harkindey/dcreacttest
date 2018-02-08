import React from 'react';
import * as moment from 'moment';

const WeatherDetails = props => {
  console.log(props);
  let {
    unit,
    data: { name, main: { temp }, dt, wind, weather: [details] }
    , changeUnit
} = props

  const date_string = moment
    .unix(dt)
    .format('LLLL')
    .toString();

  if (date_string === 'Invalid Date') {
    return null;
  }
  return (
    <section className="WeatherDetails container">
      <div className="columns">
        <div className="column w_i_v">
          <div className="content">
            <p>
              <span className="w_icon">
                <i className={`wi wi-day-${props.data.description} icon-size`} />
              </span>
              <span className="w_value">
                {temp}
                <sup>
                  <sup>o</sup>
                  {unit.deg}
                </sup>
              </span>
            </p>
          </div>
        </div>
        <div className="column details">
          <div className="content">
            <p> Location: {name} </p> <p>{`Date: ${date_string}`} </p>
            <p> Weather Description: {details.main} </p>
            <p>

              Wind: {wind.speed}
              {unit.dis}
            </p>
            <div>
              <button className="button is-light is-rounded" onClick={() => changeUnit('imperial')}>

                Imperial
              </button>
              <button className="button is-dark is-rounded" onClick={() => changeUnit('metric')}>

                Metric
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherDetails;
