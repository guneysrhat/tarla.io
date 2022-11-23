import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/userSlice";
import useAxios from "./useAxios";

const useUserCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic } = useAxios();
  const getData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(`${url}/`);
      console.log(data);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getUsers = () => getData("users");
  const getPosts = () => getData("posts");
  return { getUsers, getPosts };
};

export default useUserCalls;
