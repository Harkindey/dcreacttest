import React,{Component} from 'react';
import * as moment from 'moment';

class SunDetails extends Component{
  constructor(props) {
    super(props)
    this.state = {
      time: ''
    }
  }
  componentDidMount(){
      setInterval(this.tick,1000);
  }
  tick = () => {
   const time = moment().format('LTS')
    this.setState({
      time
    });
  }

  render(){
    if(this.state.time === '') {
      return (
      <main className="page_wait">
      <div className="loader" />
    </main>)
    }
  return (
    <section className="SunDetails container">
      <div className="columns">
        <div className="column current_time">
          <p>
            <span className="c_head">Current Date/Time: </span>
          </p>
          <p>
            <span className="time"> {this.state.time} </span>
          </p>
          <p>
            <span className="date">
              {' '}
              {moment()
                .format('LLLL')
                .split(' ', 4)
                    .join(' ')}
            </span>
          </p>
        </div>
        <div className="column sun_details">
          <div className="columns">
            <div className="content">
              <p>
                <span className="s_icon">
                  <i className={`wi wi-sunrise icon-size`} />
                </span>
              </p>
              <p>
                <span>SunRise : {timeConvert(this.props.data.sunrise)} </span>
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="content">
              <p>
                <span className="s_icon">
                  <i className={`wi wi-sunset icon-size`} />
                </span>
              </p>
              <p>
                <span>SunSet: {timeConvert(this.props.data.sunset)} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
}
const timeConvert = utc_time => {
  return moment
    .unix(utc_time)
    .format('LTS')
    .toString();
};

export default SunDetails;
