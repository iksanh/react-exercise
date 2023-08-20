import { useState } from "react";
import { useEffect } from "react";

const TimerScreen = ({ dispatch, secondRemaining }) => {
  const minutes = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="px-16 py-4 border-double bg-gray-700 border-2 border-gray-600 rounded-full">
      {minutes <= 9 && "0"}
      {minutes} : {seconds <= 9 && "0"}
      {seconds}
    </div>
  );
};
export default TimerScreen;
