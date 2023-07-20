const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 1000
          ? "You Got Everything! ready to Go"
          : `💼 you have ${numItems} item on your list , and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
