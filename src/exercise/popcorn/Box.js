import { useState } from "react";

// const Box = ({ element }) => {
export const Box = ({ children }) => {
  // using childeren
  // using element
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-slate-700 relative rounded-lg shadow-md w-1/4">
      <button
        className="absolute text-white top-2 right-2 h-6 w-6 pb-[2px] pl-[1px] rounded-full bg-slate-900 flex items-center justify-center"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="justify-center align-top">{isOpen ? "–" : "+"}</span>
      </button>
      {/* using children  */}
      {isOpen && children}

      {/* using element */}
      {/* {isOpen && element} */}
    </div>
  );
};
