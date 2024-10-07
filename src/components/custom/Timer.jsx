import { useEffect, useState } from "react";
import { CONSTANTS } from "../../constants";
import { SubmitTest } from "../Questions";
import { useNavigate } from "react-router-dom";

function Timer() {
  const [testTiming, setTestTiming] = useState(CONSTANTS.TEST_TIME_IN_MINUTES);
  const navigate = useNavigate();

  useEffect(() => {
    let time = CONSTANTS.TEST_TIME_IN_MINUTES * 60; // Total time in seconds
    const timeInterval = setInterval(() => {
      if (time > 0) {
        time--; // Decrease time by 1 second each interval

        // Calculate minutes and seconds
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        // Print minutes and seconds with proper formatting
        setTestTiming(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
        // counterRef.current = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
      } else {
        clearInterval(timeInterval); // Stop the timer when it reaches 0
        console.log("Time's up!");
        SubmitTest(navigate)
      }
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timeInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <span
      className={`fw-bold 
        ${(testTiming + "").split(":")[0] * 1 < 5 ? "text-danger" : "text-success" }`}
    >
      {testTiming}
    </span>
  );
}

export default Timer;
