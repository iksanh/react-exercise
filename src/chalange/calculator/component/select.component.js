const Select = ({ label, name, value, style, onChange, children }) => {
  return (
    <div className="flex px-2 gap-4">
      <label>{label}</label>
      <select name={name} className={style} value={value} onChange={onChange}>
        {children}
      </select>
    </div>
  );
};

export default Select;
