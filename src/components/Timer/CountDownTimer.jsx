import { useRef, useEffect, useState } from "react";

export default function CountDownTimer(props) {
  let duration = {
    hour: 0,
    minutes: 7,
  };

  let timeToSeconds = duration.hour * 60 * 60 + duration.minutes * 60;

  const [Seconds, setSeconds] = useState(timeToSeconds);

  const [pause, setPause] = useState(false);

  let intervalRef = useRef();

  const decreaseSeconds = () => setSeconds((prev) => prev - 1);

  useEffect(() => {
    setPause(false);
    intervalRef.current = setInterval(decreaseSeconds, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const secondsToHms = (sec) => {
    sec = Number(sec);
    var h = Math.floor(sec / 3600);
    var m = Math.floor((sec % 3600) / 60);
    var s = Math.floor((sec % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hr: " : " hrs: ") : "0 hr: ";
    var mDisplay = m > 0 ? m + (m == 1 ? " min: " : " mins: ") : "0 min: ";
    var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " secs") : "0 sec";

    if (h == 0 && m <= 5) {
      return (
        <span className="pr-1 text-red-500 font-semibold">
          {hDisplay + mDisplay + sDisplay}
        </span>
      );
    } else {
      return (
        <span className="pr-1 text-primary">
          {hDisplay + mDisplay + sDisplay}
        </span>
      );
    }
  };

  const handlePause = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseSeconds, 1000);
    }
    setPause(false);

    //  NOTE: DO NOT UNCOMMENT : This is for pause toggling JUST IN CASE;
    //   setPause((prev) => !prev);
  };

  useEffect(() => {
    if (Number(Seconds) <= 0) {
      props.setisTimeUp(true);
      props.setOpen(true);
      handlePause();
    }
  }, [props, Seconds]);

  return <div className="text-base">{secondsToHms(Seconds)}</div>;
}
