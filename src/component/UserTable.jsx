import * as React from "react";


export default function UserTable({ item }) {
  return (
    <>
      <tr>
        <td>{item?.id}</td>
        <td>{item?.name}</td>
        <td>{item?.username}</td>
        <td>{item?.email}</td>
        <td>
          {item?.address?.street} {item?.address?.suite} {item?.address?.city}
        </td>
        <td>{item?.phone}</td>
        <td>{item?.website}</td>
        <td>{item?.company?.name}</td>
      </tr>
    </>
  );
}
