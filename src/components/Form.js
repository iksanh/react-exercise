import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescripton] = useState("");
  const [quantity, setQuantity] = useState(2);

  const handleSubmit = (e) => {
    // console.log(e);
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    console.log(newItem);

    setDescripton("");
    setQuantity(2);
  };

  return (
    <form
      className="bg-orange-500 flex py-8 justify-center space-x-8"
      onSubmit={handleSubmit}
    >
      <h3>What do you need for your trip 😍</h3>
      <select
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, x) => x + 1).map((num, index) => (
          <option value={num} key={index}>
            {num}
          </option>
        ))}
        {/* <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option> */}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescripton(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
