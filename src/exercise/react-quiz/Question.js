import Option from "./Options";
import { useQuiz } from "./QuizContext";

const Question = () => {
  const { questions, index } = useQuiz();
  const { question } = questions[index];

  return (
    <div className="flex flex-col items-center gap-3">
      <h4 className="font-bold text-xl mb-4">{question}</h4>
      <Option />
    </div>
  );
};

export default Question;
