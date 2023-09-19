import CreateCustomer from "./features/costumers/CreateCustomer";
import Customer from "./features/costumers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function AppRedux() {
  const fullName = useSelector((state) => state.costumer.fullName);

  useEffect(() => {
    document.title = "The React-Redux Bank";
  }, []);
  return (
    <div className="relative px-20 pt-24">
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullName ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default AppRedux;
