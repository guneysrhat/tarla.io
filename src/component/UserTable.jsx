import {
  Checkbox,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";

const UserTable = ({ users, handleChange }) => {
  //!----------------------- kulaniliyor-----------------
  // const [checkedUser, setCheckedUser] = useState(false);
  // const [userInfo, setUserInfo] = useState({
  //   id: "",
  //   lat: "",
  //   lng: "",
  //   checked: false,
  // });
  //!----------------------- kulaniliyor-----------------

  //!----------------------- kulaniliyor-----------------
  // const handleChange = (e) => {
  //   setUserInfo({
  //     id: e.target.value,
  //     lat: e.target.getAttribute("data_lat"),
  //     lng: e.target.getAttribute("data_lng"),
  //     checked: e.target.checked,
  //   });
  // };
  //!----------------------- kulaniliyor-----------------
  // const handleChange = (e) => {
  //   const index = checkedUser.indexOf(e.target.value);
  //   if (index === -1) {
  //     setCheckedUser([...checkedUser, e.target.value]);
  //   } else {
  //     setCheckedUser(
  //       checkedUser.filter((checkedUser) => checkedUser !== e.target.value)
  //     );
  //   }
  // };

  return (
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
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={item.id}
            >
              <TableCell align="center">
                <input
                  onChange={handleChange}
                  value={item?.id}
                  data_lat={item?.address?.geo?.lat}
                  data_lng={item?.address?.geo?.lng}
                  data_name={item?.name}
                  type="checkbox"
                ></input>
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {item?.id}
              </TableCell>
              <TableCell align="center">{item?.username}</TableCell>

              <TableCell align="center">{item?.name}</TableCell>
              <TableCell align="center">{item?.email}</TableCell>
              <TableCell align="center">{item?.phone}</TableCell>
              <TableCell align="center">{item?.website}</TableCell>
              <TableCell align="center">{item?.company?.name}</TableCell>
              <TableCell align="center">
                {item?.address?.street} {item?.address?.suite}{" "}
                {item?.address?.city} {item?.address?.zipcode}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UserTable;
