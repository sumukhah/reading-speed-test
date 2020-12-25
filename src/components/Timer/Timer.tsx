import React, { useState, useEffect } from "react";

import "./Timer.scss";

interface Props {
  calculateWpm: (arg: number) => void;
  readingMode: boolean;
}

export default function Timer(props: Props) {
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");
  const [counter, setCounter] = useState(0);

  const timeIncrease = (): void => {
    const secondCounter = counter % 60;
    const minuteCounter = Math.floor(counter / 60);

    const computedSecond =
      String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
    const computedMinute =
      String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

    setSeconds(computedSecond as string);
    setMinutes(computedMinute as string);
    setCounter((counter) => counter + 1);
  };

  useEffect(() => {
    if (!props.readingMode && counter > 1) {
      // there is a small lag of 1 second at start.
      // to make it correct, pass +1 second to the context.
      props.calculateWpm(counter + 1);
      setCounter(0);
    }
  }, [props.readingMode, counter]);

  useEffect(() => {
    const interval = props.readingMode ? setTimeout(timeIncrease, 1000) : null;
    return () => {
      !!interval && clearInterval(interval);
    };
  }, [counter, props.readingMode]);

  if (counter === 0) {
    return null;
  }

  return (
    <div className="timer-container">
      <span>
        {minutes}:{seconds}
      </span>
    </div>
  );
}
