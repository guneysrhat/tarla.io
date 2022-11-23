import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/userSlice";
import useAxios from "./useAxios";

const useUserCall = () => {
  const dispatch = useDispatch();
  const { axiosPublic } = useAxios();

  //! -------------------------- GET CALLS ------------------------
  const getUserData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get("/users");
      dispatch(getSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getUser = () => getUserData("firms");

  return { getUser };
};

export default useUserCall;
