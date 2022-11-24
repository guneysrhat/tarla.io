import React, { useEffect } from "react";
import useUserCalls from "../hooks/useUserCalls";
import UserTable from "../component/UserTable";
import { useSelector } from "react-redux";
import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Home = () => {
  const { getUsers, getPosts } = useUserCalls();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);
  return (
    <>
      <Box>
        <Typography variant="h4" color="error" mb={4}>
          User Table
        </Typography>

        <TableContainer component={Paper} sx={{ mt: 3 }} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Checkbox />
                </TableCell>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">username</TableCell>
                <TableCell align="center">name</TableCell>
                <TableCell align="center">email</TableCell>
                <TableCell align="center">phone</TableCell>
                <TableCell align="center">website</TableCell>
                <TableCell align="center">company</TableCell>
                <TableCell align="center">address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((item) => (
                <UserTable key={item.id} item={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Home;
