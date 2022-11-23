import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

const useAxios = () => {
  const axiosPublic = axios.create({
    baseURL: BASE_URL,
  });

  return { axiosPublic };
};

export default useAxios;
