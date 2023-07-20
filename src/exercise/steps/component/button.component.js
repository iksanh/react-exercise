const Button = ({ backgroundColor, color, onClick, children }) => {
  return (
    <button
      className={`${backgroundColor} ${color} py-2 px-4 rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
