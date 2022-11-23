import React, { useEffect } from "react";
import useUserCalls from "../hooks/useUserCalls";
import UserTable from "../component/UserTable";
import { useSelector } from "react-redux";

const Home = () => {
  const { getUsers, getPosts } = useUserCalls();
  const { users } = useSelector((state) => state.user);

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
            <th>phone</th>
            <th>website</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item) => (
            <UserTable key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <UserTable />
    </>
  );
};

export default Home;
