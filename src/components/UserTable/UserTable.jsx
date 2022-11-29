import * as React from "react";
import {
  Container,
  Table,
  TableBody,
  TableBodyRow,
  TableCell,
  TableHead,
  TableRow,
} from "./UserTable.style";

const UserTable = ({ users, handleChange }) => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
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
            <TableBodyRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={item.id}
            >
              <TableCell align="center">
                <input
                  onChange={(e) => handleChange(e)}
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
            </TableBodyRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};
export default UserTable;
