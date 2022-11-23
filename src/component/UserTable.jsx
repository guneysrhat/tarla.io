import React, { useEffect } from "react";
import useUserCall from "../hooks/useUserCall";

const UserTable = () => {
  const { getUser } = useUserCall();
  useEffect(() => {
    getUser();
    console.log(getUser());
  }, []);

  return (
    <>
      <div> User Table</div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {/* {firms?.length > 0 && (
            <Grid container justifyContent="center" gap={3}>
              {firms?.map((firm) => (
                <Grid item>
                  <FirmCard key={firm.id} firm={firm} />
                </Grid>
              ))}
            </Grid>
          )} */}
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
