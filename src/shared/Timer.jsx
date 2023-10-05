/* eslint-disable react/prop-types */
import { Component } from 'react';
import styled from 'styled-components';
import './Timer.css'
 

const CountdownContainer = styled.div`
  text-align: center;
  font-size: 1rem;
//   margin-top: 2rem;
`;

class  Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      targetDate: new Date(props.targetDate),
      timeRemaining: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTime = () => {
    const { targetDate } = this.state;
    const currentTime = new Date();
    const timeRemaining = Math.max(targetDate - currentTime, 0);

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    this.setState({
      timeRemaining: {
        days,
        hours,
        minutes,
        seconds,
      },
    });

    if (timeRemaining === 0) {
      clearInterval(this.interval);
    }
  };

  render() {
    const { timeRemaining } = this.state;

    return (
      <CountdownContainer className='grid grid-cols-4'>
        <div className="countdown-item ">
          <span className="countdown-value">{timeRemaining.days}</span> <br /> 
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.hours}</span> <br />
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.minutes}</span> <br />
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.seconds}</span> <br />
          <span className="countdown-label">Seconds</span>
        </div>
      </CountdownContainer>
    );
  }
}

export default  Timer;
