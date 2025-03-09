import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { color: "#000000" },
  reducers: {
    setThemeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setThemeColor } = themeSlice.actions;
export default themeSlice.reducer;