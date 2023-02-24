import { createSlice } from "@reduxjs/toolkit";

const theme = localStorage.getItem("theme");

const initialState = {
  theme: theme ? theme : 'light',
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state, action) => {
      action.payload === "dark"
        ? (state.theme = "dark")
        : (state.theme = "light");
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { toggleMode } = themeSlice.actions;

export default themeSlice.reducer;
