import React, { FC, useEffect, useState } from "react";

import TimerComponent from "../components/Timer";

const useTimer = (limitSec: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limitSec)

  const reset = () => {
    setTimeLeft(limitSec);
  };

  useEffect(() => {
    const tick = () => {
      setTimeLeft(prevTime => (prevTime === 0 ? limitSec : prevTime - 1));
    };
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, [limitSec]);

  return [timeLeft, reset];
};

const TimerContainer: FC = () => {
  const LIMIT = 60;
  const [timerLeft, reset] = useTimer(LIMIT);

  return <TimerComponent timeLeft={timerLeft} reset={reset} />;
};

export default TimerContainer;
