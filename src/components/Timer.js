import React, { useEffect } from "react";

const Timer = ({ dispatch, secRemaining }) => {
  const minute = Math.floor(secRemaining / 60);

  const secounts = secRemaining % 60;

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
    <div className="timer">
      {minute < 10 && "0"} {minute}: {secounts < 10 && "0"} {secounts}
    </div>
  );
};

export default Timer;
