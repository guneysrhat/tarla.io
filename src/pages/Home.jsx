import React, { useEffect, useState } from "react";
import useUserCalls from "../hooks/useUserCalls";
import UserTable from "../component/UserTable";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import LocationMap from "../component/LocationMap";
import UserChart from "../component/UserChart";

const Home = () => {
  const { getUsers, getPosts } = useUserCalls();
  const { users } = useSelector((state) => state.user);
  const { post } = useSelector((state) => state.post);
  const [userInfo, setUserInfo] = useState([
    {
      id: "",
      lat: "",
      lng: "",
      name: "",
    },
  ]);

  const [userPost, setUserPost] = useState([]);

  const handleChange = (e) => {
    let updatedList = [...userInfo];

    const newUser = {
      id: e.target.value,
      lat: e.target.getAttribute("data_lat"),
      lng: e.target.getAttribute("data_lng"),
      name: e.target.getAttribute("data_name"),
    };

    if (e.target.checked) {
      updatedList = [...userInfo, newUser];
    } else {
      updatedList.splice(userInfo.indexOf(newUser), 1);
    }
    setUserInfo(updatedList);
  };

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);
  return (
    <>
      <Box>
        <Typography variant="h4" color="error" mb={4}>
          Maps
        </Typography>
        <LocationMap
          users={users}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <Typography variant="h4" color="error" mb={4}>
          Chart
        </Typography>
        <UserChart />
      </Box>

      <Box>
        <Typography variant="h4" color="error" mb={4}>
          User Table
        </Typography>

        <UserTable users={users} handleChange={handleChange} post={post} />
      </Box>
    </>
  );
};

export default Home;
