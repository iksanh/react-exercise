import Option from "./Options";

const Question = ({ questions, dispatch, answer }) => {
  const { question, options, correctOption, points } = questions;

  return (
    <div className="flex flex-col items-center gap-3">
      <h4 className="font-bold text-xl mb-4">{question}</h4>
      <Option
        options={options}
        dispatch={dispatch}
        answer={answer}
        correctOption={correctOption}
      />
    </div>
  );
};

export default Question;
