const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="flex flex-col items-center mt-16 gap-3">
      <h2 className="text-4xl font-bold">Wellcome to The React Quiz</h2>
      <h3 className="text-2xl">
        {numQuestions} Qeustions to test your React Mastery
      </h3>
      <button
        className="bg-gray-600 px-6 py-3 rounded-full mt-4"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
};

export default StartScreen;
