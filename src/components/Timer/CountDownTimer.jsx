import React, { useRef, useEffect, useState } from "react";

export default function CountDownTimer(props) {
  const [Seconds, setSeconds] = useState(10);
  const [pause, setPause] = useState(false);

  let intervalRef = useRef();

  const decreaseSeconds = () => setSeconds((prev) => prev - 1);

  useEffect(() => {
    setPause(false);
    intervalRef.current = setInterval(decreaseSeconds, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // const handleClick = () => {
  //   if (!pause) {
  //     clearInterval(intervalRef.current);
  //   } else {
  //     intervalRef.current = setInterval(decreaseSeconds, 1000);
  //   }
  //   setPause((prev) => !prev);
  // };

  const handlePause = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseSeconds, 1000);
    }
    setPause(false);
  };

 

  useEffect(() => {
    if (Number(Seconds) <= 0) {
      props.setisTimeUp(true);
      props.setOpen(true);
      handlePause();
    }
  }, [props, Seconds]);

  console.log("isTimeUp", props.isTimeUp);

  return (
    <div>
      <div className="text-primary text-base">
        <span className="pr-1">{Number(Seconds) <= 0 ? "0" : Seconds}</span>
        <span>seconds</span>
      </div>
      {/* <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>     */}
    </div>
  );
}
