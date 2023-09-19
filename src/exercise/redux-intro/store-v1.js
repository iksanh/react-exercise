import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCostumer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const ACTION_ACCOUNT = {
  DEPOSIT: "account/deposite",
  WITHDRAW: "account/withdraw",
  REQUESTLOAN: "account/requestloan",
  PAYLOAN: "account/payloan",
};

const accountReducer = (state = initialStateAccount, action) => {
  switch (action.type) {
    case ACTION_ACCOUNT.DEPOSIT:
      return { ...state, balance: state.balance + action.payload };
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

    default:
      return state;
  }
};

const costumerReducer = (state = initialStateCostumer, action) => {
  switch (action.type) {
    case "costumer/createCostumer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "costumer/updateCostumer":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
};

const rootReducer = combineReducers({ accountReducer, costumerReducer });

const store = createStore(rootReducer);

// store.dispatch({ type: ACTION_ACCOUNT.DEPOSIT, payload: 500 });

// console.log(store.getState());
// store.dispatch({ type: ACTION_ACCOUNT.WITHDRAW, payload: 200 });
// console.log(store.getState());
// store.dispatch({
//   type: ACTION_ACCOUNT.REQUESTLOAN,
//   payload: { amount: 1000, purpose: "Buy a car" },
// });

// console.log(store.getState());

// store.dispatch({ type: ACTION_ACCOUNT.PAYLOAN });
// console.log(store.getState());

function deposit(amount) {
  return { type: ACTION_ACCOUNT.DEPOSIT, payload: amount };
}
function withdraw(amount) {
  return { type: ACTION_ACCOUNT.WITHDRAW, payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: ACTION_ACCOUNT.REQUESTLOAN,
    payload: { amount, purpose },
  };
}
function payloan() {
  return {
    type: ACTION_ACCOUNT.PAYLOAN,
  };
}

store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(100, "buy a cheap car"));
console.log(store.getState());
store.dispatch(payloan());
console.log(store.getState());

function createCostumer(fullName, nationalID) {
  return {
    type: "costumer/createCostumer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
function updateCostumer(fullName) {
  return { type: "costumer/updateCostumer", payload: fullName };
}

store.dispatch(createCostumer("iksan Hariji", "Indonesia"));
console.log(store.getState());
store.dispatch(updateCostumer("Iksan"));
console.log(store.getState());
