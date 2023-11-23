import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setIsDarkMode: (state) => {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    },
  },
});

export const { setIsDarkMode } = systemSlice.actions;

export default systemSlice.reducer;
