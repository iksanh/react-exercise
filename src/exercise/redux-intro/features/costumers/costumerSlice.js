import { createSlice } from "@reduxjs/toolkit";

const initialStateCostumer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const costumerSlice = createSlice({
  name: "costumer",
  initialState: initialStateCostumer,
  reducers: {
    createCostumer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateCostumer(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCostumer, updateCostumer } = costumerSlice.actions;
export default costumerSlice.reducer;

// without create slice
// const costumerReducer = (state = initialStateCostumer, action) => {
//   switch (action.type) {
//     case "costumer/createCostumer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "costumer/updateCostumer":
//       return { ...state, fullName: action.payload };

//     default:
//       return state;
//   }
// };

// export function createCostumer(fullName, nationalID) {
//   return {
//     type: "costumer/createCostumer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// }
// export function updateCostumer(fullName) {
//   return { type: "costumer/updateCostumer", payload: fullName };
// }

// export default costumerReducer;
