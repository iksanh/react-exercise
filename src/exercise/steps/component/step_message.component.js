const StepMessage = ({ step, children }) => {
  return (
    <div className="text-center font-medium">
      <h3 className="text-2xl font-bold text-slate-700">Step {step} </h3>
      {children}
    </div>
  );
};
export default StepMessage;
