import React from "react";
import Display from "./Display";
import Colon from "./Colon";

const Clock = () => {
  const [time, setTime] = React.useState(parseTime());

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  function parseTime() {
    let hours = new Date().getHours();
    console.log(hours);
    if (hours >= 6 && hours < 18)
      document.body.style.backgroundColor = "yellow";
    else document.body.style.backgroundColor = "black";
    hours = hours.toString().split("");
    const minutes = new Date().getMinutes().toString().split("");
    const seconds = new Date().getSeconds().toString().split("");
    if (hours.length == 1) {
      hours.splice(0, 0, null);
    }
    if (hours[0] == "0" && hours[1] == "0") {
      hours[0] = "1";
      hours[1] = "2";
    }
    if (minutes.length == 1) {
      minutes.splice(0, 0, "0");
    }
    if (seconds.length == 1) {
      seconds.splice(0, 0, "0");
    }
    return { hours, minutes, seconds };
  }

  function tick() {
    setTime(parseTime());
  }

  return (
    <div className="Clock-Body">
      <Display value={time.hours[0]} />
      <Display value={time.hours[1]} />
      <Colon />
      <Display value={time.minutes[0]} />
      <Display value={time.minutes[1]} />
      <Colon />
      <Display value={time.seconds[0]} />
      <Display value={time.seconds[1]} />
    </div>
  );
};

export default Clock;
