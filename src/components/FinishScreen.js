import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = points / maxPossiblePoints;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🏆";
  if (percentage >= 50 && percentage < 80) emoji = "🥳";
  if (percentage >= 0 && percentage < 50) emoji = "🎉";
  if (percentage === 0) emoji = "😢";

  return (
    <>
      <p className="result">
        {emoji}
        You scored <strong>{points}</strong>out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore"> (Highscore : {highscore} points) </p>
      <div className="btn btn-ui" onClick={() => dispatch({ type: "reset" })}>
        Restart Qize
      </div>
    </>
  );
};

export default FinishScreen;
