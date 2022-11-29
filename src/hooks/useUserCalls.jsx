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
      //console.log(data);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  // const getPost = async (id, url) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosPublic.get(`${url}?userId=${id}`);
  //     dispatch(getSuccess({ data, url }));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };
  // const getPosts = (id) => getPost(id, "posts");
  const getPosts = () => getData("posts");
  const getUsers = () => getData("users");
  return { getUsers, getPosts };
};

export default useUserCalls;
