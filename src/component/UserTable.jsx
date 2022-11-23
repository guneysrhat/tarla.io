import * as React from "react";

export default function UserTable({ item }) {
  return (
    <>
      <tr>
        <td>{item?.id}</td>
        <td>Maria Anders</td>
        <td>Germany</td>
        <td>Germany</td>
        <td>Germany</td>
        <td>Germany</td>
      </tr>
    </>
  );
}
