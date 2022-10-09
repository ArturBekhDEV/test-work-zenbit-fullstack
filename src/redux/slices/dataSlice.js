import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const dataSliceReducer = createSlice({
  name: "dataFilter",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setClear: (state) => {
      state.name = "";
    },
  },
});

export const { setName, setEmail, setMessage } = dataSliceReducer.actions;
export default dataSliceReducer.reducer;
