import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charge", quantity: 1, packed: false },
];

const TravelList = () => {
  // const [items, setItems] = useState(initialItems);
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (itemDelete) => {
    const itemsNew = items.filter((item) => item.id !== itemDelete);
    setItems(itemsNew);
  };

  const handleUpdateItem = (itemUpdateId) => {
    setItems((items) =>
      items.map((item) =>
        item.id === itemUpdateId ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItems = () => {
    const confirmClearList = window.confirm(
      "Are you Want to Clear All Items ? "
    );

    if (confirmClearList) setItems([]);
  };
  return (
    <div className="">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onUpdateItems={handleUpdateItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default TravelList;
