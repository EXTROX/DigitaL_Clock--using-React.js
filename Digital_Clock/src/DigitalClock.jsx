import React, {useState, useEffect} from 'react';

function DigitalClock() {

const [time, setTime] = useState(new Date()); //set a useState hook state for a timer

useEffect(() => {
  // mount code(to create an interval that runs every 1 millisecond)
  const intervalId =setInterval(() => {
    setTime(new Date());
  }, 1000);

  // unmount code(is used to clear the interval after runing)
  return () => {
    clearInterval(intervalId);
  }
}, []);

  function formatTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >=12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)} ${padZero(minutes)} ${padZero(seconds)} ${padZero(meridiem)}`;
  }

  function padZero(number){
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className='clock-container'>
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;