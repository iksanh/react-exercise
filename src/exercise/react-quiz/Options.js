const Option = ({ options, dispatch, answer, correctOption }) => {
  const hasAnswered = answer !== null;
  console.log(hasAnswered);

  return (
    <div className="flex flex-col gap-5 mb-12 w-2/3 ">
      {options.map((option, index) => (
        <button
          className={` pl-8 py-4 w-full rounded-full text-lg font-semibold   text-left ${
            answer === index && "translate-x-5"
          } ${
            hasAnswered
              ? correctOption === index
                ? "bg-cyan-600 text-white cursor-not-allowed"
                : "bg-amber-400 text-black cursor-not-allowed"
              : " bg-gray-500 cursor-pointer transform  hover:translate-x-5 duration-200 ease-in hover:text-white hover:bg-gray-600 hover:shadow-sm "
          } `}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Option;
