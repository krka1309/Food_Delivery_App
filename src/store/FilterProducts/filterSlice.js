import { createSlice } from "@reduxjs/toolkit";
const searchText = "";

const initialState = {
  searchText: searchText,
};

const filterSlice = createSlice({
  name: "FilterProd",
  initialState,
  reducers: {
    filterProducts(state, action) {
      state.searchText = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
