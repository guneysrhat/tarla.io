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
            <TableCell >#</TableCell>
            <TableCell >Username</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Phone</TableCell>
            <TableCell >Website</TableCell>
            <TableCell >Company</TableCell>
            <TableCell >Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((item) => (
            <TableBodyRow
              key={item.id}
            >
              <TableCell >
                <input
                  onChange={(e) => handleChange(e)}
                  value={item?.id}
                  data_lat={item?.address?.geo?.lat}
                  data_lng={item?.address?.geo?.lng}
                  data_name={item?.name}
                  type="checkbox"
                ></input>
              </TableCell>
              <TableCell >
                {item?.id}
              </TableCell>
              <TableCell >{item?.username}</TableCell>

              <TableCell >{item?.name}</TableCell>
              <TableCell >{item?.email}</TableCell>
              <TableCell >{item?.phone}</TableCell>
              <TableCell >{item?.website}</TableCell>
              <TableCell >{item?.company?.name}</TableCell>
              <TableCell >
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
