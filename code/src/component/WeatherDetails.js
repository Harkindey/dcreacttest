import React from 'react';
import * as moment from 'moment';

const WeatherDetails = props => {
  const date_string = moment
    .unix(props.data.measure_date)
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
                {props.data.temp}
                <sup>
                  <sup>o</sup>
                  {props.data.unit.deg}
                </sup>
              </span>
            </p>
          </div>
        </div>
        <div className="column details">
          <div className="content">
            <p> Location: {props.data.location} </p> <p>{`Date: ${date_string}`} </p>
            <p> Weather Description: {props.data.main} </p>{' '}
            <p>
              {' '}
              Wind: {props.data.speed}
              {props.data.unit.dis}{' '}
            </p>
            <div>
              <button className="button is-light is-rounded" onClick={() => props.data.changeUnit('imperial')}>
                {' '}
                Imperial{' '}
              </button>
              <button className="button is-dark is-rounded" onClick={() => props.data.changeUnit('metric')}>
                {' '}
                Metric{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherDetails;
