import { useState } from "react";
import Button from "./button.component";
import StepMessage from "./step_message.component";
const Step = ({ messages }) => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevius = () => {
    // if (step > 1) setStep(step - 1);
    // update state using callback
    if (step > 1) setStep((s) => s - 1);
  };
  const handleNext = () => {
    // if (step < messages.length) setStep(step + 1);
    // update state using callback
    if (step < messages.length) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
  };
  return (
    <div className="flex  justify-center align-middle relative mx-60  bg-slate-100">
      <button
        className="absolute top-3 right-5 text-2xl "
        onClick={() => setIsOpen(!isOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="flex flex-col justify-between gap-y-6 px-8 py-8">
          <div className=" flex flex-row justify-between align-middle ">
            {messages.map((_, index) => {
              return (
                <div
                  key={index}
                  className={`text-white rounded-full px-4 py-2 ${
                    step >= index + 1 ? " bg-purple-500" : " bg-slate-400"
                  }`}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}
            <div>
              <Button
                backgroundColor="bg-slate-300"
                color="text-slate-800"
                onClick={() => alert(messages[step - 1])}
              >
                <span>How To</span>
              </Button>
            </div>
          </StepMessage>

          <div className="flex flex-row justify-evenly gap-10">
            <Button
              backgroundColor="bg-purple-600"
              color="text-white"
              onClick={handlePrevius}
            >
              <span>Previus</span>👈
            </Button>
            <Button
              backgroundColor="bg-purple-600"
              color="text-white"
              onClick={handleNext}
            >
              <span>next</span>👉
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step;
