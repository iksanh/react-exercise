import Step from "./component/step.component";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Steps = () => {
  return <Step messages={messages} />;
};

export default Steps;
