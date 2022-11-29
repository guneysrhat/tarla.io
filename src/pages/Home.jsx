import React, { useEffect, useState } from "react";
import useUserCalls from "../hooks/useUserCalls";
import UserTable from "../components/UserTable/UserTable";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import LocationMap from "../components/LocationsMap/LocationMap";
import UserChart from "../components/UserChart/UserChart";

const Home = () => {
  const { getUsers, getPosts } = useUserCalls();
  const { users, posts } = useSelector((state) => state.user);

  const [userInfo, setUserInfo] = useState([]);

  const [userPost, setUserPost] = useState([]);



  console.log(posts);
  console.log(userPost);
  const handleChange = (e) => {
    let updatedList = [...userInfo];
    let updatedPost = [...userPost];



    const postFilterCount = posts.filter(
      (item) => item.userId == e.target.value
    );
    console.log(postFilterCount);

    const newPost = {
      userId: e.target.value,
      userPostCount: postFilterCount.length,
      name: e.target.getAttribute("data_name"),
    };

    console.log(newPost);
    const newUser = {
      id: e.target.value,
      lat: e.target.getAttribute("data_lat"),
      lng: e.target.getAttribute("data_lng"),
      name: e.target.getAttribute("data_name"),
    };

    if (e.target.checked) {
      updatedList = [...userInfo, newUser];
      updatedPost = [...userPost, newPost];
      setUserPost(updatedPost);
      setUserInfo(updatedList);
    } else {
      const userFilter = updatedList.filter(
        (item) => item.id !== e.target.value
      );

      const postFilter = updatedPost.filter(
        (item) => item.userId !== e.target.value
      );
      setUserPost(postFilter);
      setUserInfo(userFilter);
    }
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
        <UserChart posts={posts} userPost={userPost} />
      </Box>

      <Box>
        <Typography variant="h4" color="error" mb={4}>
          User Table
        </Typography>

        <UserTable users={users} handleChange={handleChange} />
      </Box>
    </>
  );
};

export default Home;
