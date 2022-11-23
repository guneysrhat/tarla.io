import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    loading: false,
    error: false,
    id: null,
    name: null,
    username: null,
    email: null,
    address: {
      street: null,
      suite: null,
      city: null,
      zipcode: null,
      geo: {
        lat: null,
        lng: null,
      },
    },
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data } }) => {
      state = data;
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail } = userSlice.actions;
export default userSlice.reducer;
