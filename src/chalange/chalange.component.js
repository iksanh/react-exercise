import { Link } from "react-router-dom";

const Chalange = () => {
  return (
    <div className="px-20">
      <ul>
        <li>
          <Link to="calculator">Calculator</Link>
        </li>
        <li>
          <Link to="textexpander">TextExpander</Link>
        </li>
        <li>
          <Link to="currency">Currency</Link>
        </li>
      </ul>
    </div>
  );
};

export default Chalange;
