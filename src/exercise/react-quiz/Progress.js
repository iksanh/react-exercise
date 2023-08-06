const Progress = ({
  index,
  numQuestions,
  points,
  answer,
  maxPosiblePoints,
}) => {
  return (
    <header className="flex flex-col justify-between px-40 py-8 gap-2 ">
      <div className="w-full bg-gray-400 rounded-full dark:bg-gray-700">
        <div
          className={`${
            answer === null && index === 0 ? "bg-gray-400" : "bg-cyan-400"
          } text-lg font-medium text-blue-100 text-center p-1 leading-none rounded-full`}
          style={{
            width: `${
              ((index + Number(answer !== null)) / numQuestions) * 100
            }%`,
          }}
        ></div>
      </div>

      <div className="flex justify-between">
        <p>
          Question <strong>{index + 1}</strong>/{numQuestions}
        </p>
        <p>
          <strong>{points}</strong>/{maxPosiblePoints}
        </p>
      </div>
    </header>
  );
};

export default Progress;
