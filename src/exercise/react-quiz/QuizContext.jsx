import { createContext, useContext, useReducer, useEffect } from "react";

const QuizContext = createContext();

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

const QuizProvider = ({ children }) => {
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

  const handleNewAnswer = (index) => {
    dispatch({ type: "newAnswer", payload: index });
  };

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  let numQuestions = questions.length;
  let maxPosiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        secondRemaining,
        STATUS,
        numQuestions,
        maxPosiblePoints,
        handleNewAnswer,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Quiz Context was used outside Quiz Provider");

  return context;
};

export { QuizProvider, useQuiz };
