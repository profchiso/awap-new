import React, { useRef, useEffect, useState } from "react";

export default function CountDownTimer() {
  const [Seconds, setSeconds] = useState(60);
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
  
  return (
    <div>
      <div>{Seconds}</div>
      {/* <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button> */}
    </div>
  );
}