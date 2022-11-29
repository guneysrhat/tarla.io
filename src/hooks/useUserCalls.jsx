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

      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getPosts = () => getData("posts");
  const getUsers = () => getData("users");
  return { getUsers, getPosts };
};

export default useUserCalls;
