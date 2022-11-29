import React, { useEffect, useState } from "react";
import useUserCalls from "../../hooks/useUserCalls";
import UserTable from "../../components/UserTable/UserTable";
import { useSelector } from "react-redux";

import LocationMap from "../../components/LocationsMap/LocationMap";
import UserChart from "../../components/UserChart/UserChart";
import { Card, CardTable, Header, MainContainer } from "./Home.styled";

const Home = () => {
  const { getUsers, getPosts } = useUserCalls();
  const { users, posts } = useSelector((state) => state.user);

  const [userInfo, setUserInfo] = useState([]);

  const [userPost, setUserPost] = useState([]);

  const handleChange = (e) => {
    let updatedList = [...userInfo];
    let updatedPost = [...userPost];

    const postFilterCount = posts.filter(
      (item) => String(item.userId) === String(e.target.value)
    );

    const newPost = {
      userId: e.target.value,
      userPostCount: postFilterCount.length,
      name: e.target.getAttribute("data_name"),
    };

    const newUser = {
      id: e.target.value,
      lat: e.target.getAttribute("data_lat"),
      lng: e.target.getAttribute("data_lng"),
      name: e.target.getAttribute("data_name"),
    };

    if (e.target.checked) {
      updatedList = [...userInfo, newUser];
      updatedPost = [...userPost, newPost];
      setUserPost(updatedPost);
      setUserInfo(updatedList);
    } else {
      const userFilter = updatedList.filter(
        (item) => item.id !== e.target.value
      );

      const postFilter = updatedPost.filter(
        (item) => item.userId !== e.target.value
      );
      setUserPost(postFilter);
      setUserInfo(userFilter);
    }
  };

  useEffect(() => {
    getUsers();
    getPosts();
  }, [getPosts, getUsers]);
  return (
    <>
      <MainContainer wrap="wrap">
        <Card>
          <Header>Maps</Header>
          <LocationMap
            users={users}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </Card>

        <Card>
          <Header>Chart</Header>
          <UserChart posts={posts} userPost={userPost} />
        </Card>
      </MainContainer>

      <MainContainer wrap="wrap">
        <CardTable>
          <Header variant="h4" color="error" mb={4}>
            User Table
          </Header>
          <UserTable users={users} handleChange={handleChange} />
        </CardTable>
      </MainContainer>
    </>
  );
};

export default Home;
