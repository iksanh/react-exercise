import { createSlice } from "@reduxjs/toolkit";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialStateAccount,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payloan(state, action) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

console.log(accountSlice);

export const { withdraw, requestLoan, payloan } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async (dispatch, getState) => {
    dispatch({ type: "account/convertingCurrency" });
    //Api Call
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await response.json();
    const converted = data.rates.USD;

    // console.log(data);
    return dispatch({ type: "account/deposit", payload: converted });
  };
}

export default accountSlice.reducer;

/*
accountSlice without redux toolkit

const ACTION_ACCOUNT = {
  DEPOSIT: "account/deposite",
  WITHDRAW: "account/withdraw",
  REQUESTLOAN: "account/requestloan",
  PAYLOAN: "account/payloan",
  CONVERTING: "account/converting",
};

const accountReducer = (state = initialStateAccount, action) => {
  switch (action.type) {
    case ACTION_ACCOUNT.DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case ACTION_ACCOUNT.WITHDRAW:
      return { ...state, balance: state.balance - action.payload };
    case ACTION_ACCOUNT.REQUESTLOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case ACTION_ACCOUNT.PAYLOAN:
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case ACTION_ACCOUNT.CONVERTING:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};

export function deposit(amount, currency) {
  if (currency === "USD")
    return { type: ACTION_ACCOUNT.DEPOSIT, payload: amount };

  return async (dispatch, getState) => {
    dispatch({ type: ACTION_ACCOUNT.CONVERTING });
    //Api Call
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await response.json();
    const converted = data.rates.USD;

    // console.log(data);
    return dispatch({ type: ACTION_ACCOUNT.DEPOSIT, payload: converted });
  };
}
export function withdraw(amount) {
  return { type: ACTION_ACCOUNT.WITHDRAW, payload: amount };
}
export function requestLoan(amount, purpose) {
  return {
    type: ACTION_ACCOUNT.REQUESTLOAN,
    payload: { amount, purpose },
  };
}
export function payloan() {
  return {
    type: ACTION_ACCOUNT.PAYLOAN,
  };
}

export default accountReducer;
*/
