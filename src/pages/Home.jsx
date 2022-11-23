import React, { useEffect } from "react";
import useUserCalls from "../hooks/useUserCalls";
//import { useSelector } from "react-redux";
import UserTable from "../component/UserTable";

//import useUserCalls from "../hooks/useUserCall";

const Home = () => {
  const { getUsers, getPosts } = useUserCalls();
  // const { user } = useSelector((state) => state.user);

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);
  return (
    <>
      <p>User Table</p>
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
          {/* {data.map((item) => (
            <UserTable key={item.id} item={item} />
          ))} */}
        </tbody>
      </table>
      <UserTable />
    </>
  );
};

export default Home;
