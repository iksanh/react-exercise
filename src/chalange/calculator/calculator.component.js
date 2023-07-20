import { useState } from "react";
import Button from "./component/button.component";
import Select from "./component/select.component";
import BillInput from "./component/input.component";

const serviceList = [
  {
    value: 1,
    name: "Dissatisfied",
    percent: 0,
  },
  {
    value: 2,
    name: "It was okay",
    percent: 5,
  },
  {
    value: 3,
    name: "It was good",
    percent: 10,
  },
  {
    value: 4,
    name: "Absolutely amazing ! ",
    percent: 20,
  },
];

const Calculator = () => {
  const [bill, setBill] = useState(null);
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  const serviceTotal =
    0.5 * Number(friendService ? service + friendService : service);
  const billTotal = Number(serviceTotal ? bill + serviceTotal : bill);

  const handleReset = () => {
    setBill(null);
    setService(0);
    setFriendService(0);
  };

  return (
    <div className="px-20 flex flex-col gap-4 w-auto ">
      <BillInput
        label={`How Muchwas the bill ?`}
        style={`px-2 py-1 rounded-sm shadow-sm border-e border-2`}
        type={`text`}
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <Select
        label={`How did you like the service ?`}
        name={`likeService`}
        style={`px-2 py-1 rounded-sm shadow-sm border-e border-2`}
        value={service}
        onChange={(e) => setService(Number(e.target.value))}
      >
        {serviceList.map((list, index) => (
          <option value={list.percent}>
            {list.name} ({list.percent} %)
          </option>
        ))}
      </Select>
      <Select
        label={`How did your friend like the service ? `}
        name={`likeService`}
        style={`px-2 py-1 rounded-sm shadow-sm border-e border-2`}
        value={friendService}
        onChange={(e) => setFriendService(Number(e.target.value))}
      >
        {serviceList.map((list, index) => (
          <option value={list.percent}>
            {list.name} ({list.percent} %)
          </option>
        ))}
      </Select>
      <div className="px-2">
        <h1>
          {billTotal !== 0 &&
            `You Pay $${billTotal} ($${bill} + $${serviceTotal} Tip)`}
        </h1>
      </div>
      <Button
        onClick={handleReset}
        style={`py-2 px-3 w-1/4 rounded-lg bg-green-400 text-black`}
      >
        Reset
      </Button>
    </div>
  );
};

export default Calculator;
