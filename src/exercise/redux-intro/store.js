import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import costumerReducer from "./features/costumers/costumerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    costumer: costumerReducer,
  },
});

export default store;
