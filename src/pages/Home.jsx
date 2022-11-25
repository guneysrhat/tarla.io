import React, { useEffect } from "react";
import useUserCalls from "../hooks/useUserCalls";
import UserTable from "../component/UserTable";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import LocationMap from "../component/LocationMap";

const Home = () => {
  const { getUsers, getPosts } = useUserCalls();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);
  return (
    <>
      <LocationMap />
      <Box>
        <Typography variant="h4" color="error" mb={4}>
          User Table
        </Typography>

        <UserTable users={users} />
      </Box>
    </>
  );
};

export default Home;
