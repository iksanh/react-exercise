const FinishedScreen = ({ points, maxPosiblePoints, highScore, dispatch }) => {
  const percentageScore = Math.ceil((points / maxPosiblePoints) * 100);
  let emoji;
  if (percentageScore === 100) emoji = "🥇";
  if (percentageScore >= 85 && percentageScore < 100) emoji = "🥈";
  if (percentageScore >= 75 && percentageScore < 85) emoji = "🥉";
  if (percentageScore >= 50 && percentageScore < 75) emoji = "💪";
  if (percentageScore < 50) emoji = "😞";

  return (
    <div className="flex flex-col justify-center">
      <p className="flex flex-row justify-center px-1 py-4 mx-auto rounded-full text-xl">
        <span>
          <span>{emoji}</span> Your Scored
          <strong> {points} </strong> out of
          <strong> {maxPosiblePoints} </strong>{" "}
          <strong> ({percentageScore}%) </strong>
        </span>
      </p>
      <p className="text-center">(highScore : {highScore} Points)</p>
      <button
        className="bg-gray-600 px-6 py-3 rounded-full mt-4 mx-auto"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart
      </button>
    </div>
  );
};

export default FinishedScreen;
