import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";

import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import TimerScreen from "./TimerScreen";
import Footer from "./Footer";
import { useQuiz } from "./QuizContext";

const ReactQuizApp = () => {
  const { status, STATUS } = useQuiz();

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-start items-center px-48">
      <Header />

      <Main>
        {status === STATUS.LOADING && <Loader />}
        {status === STATUS.ERROR && <Error />}
        {status === STATUS.READY && <StartScreen />}
        {status === STATUS.ACTIVE && (
          <>
            <Progress />
            <Question />
            <Footer>
              <TimerScreen />
              <NextButton />
            </Footer>
          </>
        )}
        {status === STATUS.FINISHED && (
          <>
            <FinishedScreen />
          </>
        )}
      </Main>
    </div>
  );
};

export default ReactQuizApp;
