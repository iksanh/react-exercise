// const Input = () => {
//   return (
//     <div className="flex px-2 gap-4">
//         <label>How Muchwas the bill ? </label>
//         <input
//           className="px-2 py-1 rounded-sm shadow-sm border-e border-2 "
//           type="text"
//           value={bill}
//           onChange={(e) => setBill(Number(e.target.value))}
//         />
//       </div>
//   );
// }
// export default Input

const BillInput = ({ label, value, type, onChange, style }) => {
  return (
    <div className="flex px-2 gap-4">
      <label>{label}</label>
      <input className={style} type={type} value={value} onChange={onChange} />
    </div>
  );
};
export default BillInput;
