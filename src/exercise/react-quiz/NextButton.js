const NextButton = ({ dispatch, index, numQuestions }) => {
  const lastQuestion = index === numQuestions - 1;
  return (
    <button
      className="px-16 py-2 border-double bg-gray-700 border-2 border-gray-500 text-gray-200 rounded-full transform hover:bg-gray-800 ease-in-out duration-150"
      onClick={() =>
        dispatch({ type: lastQuestion ? "FinishedQuestion" : "nextQuestion" })
      }
    >
      {lastQuestion ? "Finished" : "Next"}
    </button>
  );
};

export default NextButton;
