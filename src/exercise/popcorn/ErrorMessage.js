export const ErrorMessage = ({ message }) => {
  return (
    <p className="text-center text-white p-[4.8rem]">
      <span>⛔</span>
      {message}
    </p>
  );
};
