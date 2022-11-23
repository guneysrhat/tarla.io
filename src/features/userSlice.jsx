import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    // id: null,
    // name: null,
    // username: null,
    // email: null,
    // address: {
    //   street: null,
    //   suite: null,
    //   city: null,
    //   zipcode: null,
    //   geo: {
    //     lat: null,
    //     lng: null,
    //   },
    // },
    // phone: null,
    // website: null,
    // company: {
    //   name: null,
    //   catchPhrase: null,
    //   bs: null
    // },
    post: null,
    users: null,
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state[url] = data;
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
