// const WatchedBox = ({ children }) => {
//   const [isOpen2, setIsOpen2] = useState(true);
//   return (
//     <div className="bg-slate-700 relative rounded-lg shadow-md w-1/4">
//       <button
//         className="absolute text-white top-2 right-2 h-6 w-6 pb-[2px] pl-[1px] rounded-full bg-slate-900 flex items-center justify-center"
//         onClick={() => setIsOpen2((open) => !open)}
//       >
//         {isOpen2 ? "–" : "+"}
//       </button>
//       {isOpen2 && <>{children}</>}
//     </div>
//   );
// };
export const Main = ({ children }) => {
  return (
    <main className="flex flex-row gap-8 mt-10 r justify-center w-auto">
      {children}
    </main>
  );
};
