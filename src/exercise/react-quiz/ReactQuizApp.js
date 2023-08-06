import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import { useReducer } from "react";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import TimerScreen from "./TimerScreen";
import Footer from "./Footer";

const SECT_PER_QUESTIONS = 30;

const STATUS = {
  READY: "Ready",
  ERROR: "Error",
  LOADING: "Loading",
  ACTIVE: "Active",
  FINISHED: "Finished",
};

const initialState = {
  questions: [],
  status: "Loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondRemaining: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: STATUS.READY };
    case "dataFailed":
      return { ...state, status: STATUS.ERROR };
    case "start":
      return {
        ...state,
        status: STATUS.ACTIVE,
        secondRemaining: state.questions.length * SECT_PER_QUESTIONS,
      };
    case "newAnswer":
      const questions = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === questions.correctOption
            ? state.points + questions.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "FinishedQuestion":
      return {
        ...state,
        status: STATUS.FINISHED,
        highScore:
          state.points >= state.highScore ? state.points : state.highScore,
      };
    case "reset":
      return {
        ...initialState,
        questions: state.questions,
        status: STATUS.READY,
        highScore: state.highScore,
      };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? STATUS.FINISHED : state.status,
        highScore:
          state.points >= state.highScore ? state.points : state.highScore,
      };
    default:
      throw new Error("Unknow Action");
  }
};

const ReactQuizApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    questions,
    status,
    index,
    answer,
    points,
    highScore,
    secondRemaining,
  } = state;

  let numQuestions = questions.length;
  let maxPosiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-start items-center px-48">
      <Header />

      <Main>
        {status === STATUS.LOADING && <Loader />}
        {status === STATUS.ERROR && <Error />}
        {status === STATUS.READY && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === STATUS.ACTIVE && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              answer={answer}
              maxPosiblePoints={maxPosiblePoints}
            />
            <Question
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <TimerScreen
                dispatch={dispatch}
                secondRemaining={secondRemaining}
              />
              <NextButton
                dispatch={dispatch}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === STATUS.FINISHED && (
          <>
            <FinishedScreen
              points={points}
              maxPosiblePoints={maxPosiblePoints}
              highScore={highScore}
              dispatch={dispatch}
            />
          </>
        )}
      </Main>
    </div>
  );
};

export default ReactQuizApp;
