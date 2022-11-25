import {
  Checkbox,
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

const UserTable = ({ users }) => {
  const [isChecked, setIsChecked] = useState([]);
  const handleCheckBox = (e) => {
    const { id, value, checked } = e.target;
    //console.log(value);
    if (checked) {
      setIsChecked([...isChecked, id, value]);
    } else {
      setIsChecked(isChecked.filter((e) => e !== id, value));
    }
    console.log(isChecked);
  };

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
                <Checkbox
                  id={item?.id}
                  value={item?.address?.geo?.lat}
                  checked={item.isChecked}
                  onChange={(e) => handleCheckBox(e)}
                />
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
                {item?.address?.street}
                {item?.address?.suite}
                {item?.address?.city}
                {item?.address?.zipcode}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UserTable;
