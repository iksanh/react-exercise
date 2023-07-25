import { useEffect, useRef, useState } from "react";
import { useKey } from "./useKey";

export const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  // useEffect(() => {
  //   const callback = (e) => {
  //     if (document.activeElement === inputEl.current) return;
  //     if (e.code === "Enter") {
  //       inputEl.current.focus();
  //       setQuery("");
  //     }
  //   };
  //   document.addEventListener("keydown", callback);

  //   return () => {
  //     document.addEventListener("keydown", callback);
  //   };
  // }, [setQuery]);
  return (
    <input
      className="justify-self-center w-full bg-violet-500 text-white  px-4 py-2 rounded-sm  placeholder-slate-300 outline-none focus:shadow-lg focus:transform focus:translate-y-2"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};
