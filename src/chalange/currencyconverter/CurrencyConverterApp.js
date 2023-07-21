import { useEffect, useState } from "react";

const HOST = "api.frankfurter.app";

const currency = ["USD", "EUR", "CAD", "INR"];

const CurrencyConverterApp = () => {
  const [output, setOutPut] = useState("");
  const [amount, setAmount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [fromCur, setFromCur] = useState(currency[0]);
  const [toCur, setToCur] = useState(currency[1]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const repson = await fetch(
        `https://${HOST}/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
      );
      const data = await repson.json();
      console.log(data.rates);

      setOutPut(() => (fromCur === toCur ? amount : data.rates[toCur]));
      // setOutPut(data.rates[toCur]);
      setIsLoading(false);
    };
    getData();
  }, [amount, fromCur, toCur]);

  const handleInput = (e) => {
    const inputValue = Number(e.target.value);
    if (isNaN(inputValue) || inputValue === "" || inputValue < 1) return;
    setAmount(() => inputValue);
  };

  return (
    <div className="flex flex-col px-20 gap-3">
      <div className="flex gap-2">
        <input
          type="text"
          value={amount}
          className="bg-slate-200"
          onChange={handleInput}
        />
        <select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
          {currency.map((cur, i) => (
            <option value={cur} key={i}>
              {cur}
            </option>
          ))}
        </select>
        <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
          {currency.map((cur, i) => (
            <option value={cur} key={i}>
              {cur}
            </option>
          ))}
        </select>
      </div>
      <p>
        {isLoading ? (
          <>Loading ....</>
        ) : (
          <>
            {output} {toCur}
          </>
        )}
      </p>
    </div>
  );
};

export default CurrencyConverterApp;
