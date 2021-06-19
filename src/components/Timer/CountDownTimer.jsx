import React, { useRef, useEffect, useState } from "react";

export default function CountDownTimer(props) {
  const [Seconds, setSeconds] = useState(11);
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
    intervalRef.current = 0;
    setPause(true);
    // props.setisTimeUp(true)
  };

  // console.log("isTimeUp",props.isTimeUp)
  // console.log("pause",pause)
  //Still runs in background, and its bad

  return (
    <div>
      <div className="text-primary text-base">
        <span className="pr-1">
          {Number(Seconds) <= 0 ? ()=>handlePause() : Seconds}
          {Number(Seconds) <= 0 ? "0" : ""} 
        </span>
        <span>seconds</span>
      </div>
      {/* <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button> */}
    </div>
  );
}
