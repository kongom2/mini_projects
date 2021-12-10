<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect,useState } from "react";
>>>>>>> 0e3444ab298a9a242b0eecaf7628a025974b5dd2
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// component, element 불러오기
import {
  ProjectList,
  AddList,
  ProjectAddList,
} from "../components/componentIndex";
import { Text, Grid } from "../elements/elementsIndex";
import { actionCreators as projectActions } from "../redux/modules/project";
import { actionCreators as userActions } from "../redux/modules/user";
import { apis } from "../api/axios";
import { history } from "../redux/configureStore";

const Project = (props) => {
  const dispatch = useDispatch();
  const id = window.sessionStorage.getItem("id");
  const [projects_name, setProjectText] = useState("");

<<<<<<< HEAD
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   apis
  //     .loginCheck(token)
  //     .then((res) => {
  //       console.log("야호");
  //       return res;
  //     })
  //     .catch((err) => {
  //       alert("로그인 정보가 없습니다!");
  //       history.push("/");
  //     });
  // }, []);
=======

  const is_session = localStorage.getItem("token")

  React.useEffect(() => {
    if (!is_session) {
      alert('로그인 정보가 없습니다!')
      history.replace("/");
    }
  }, []);
>>>>>>> 0e3444ab298a9a242b0eecaf7628a025974b5dd2

  return (
    <React.Fragment>
      <Grid padding="104px 20px">
        <Grid padding="0px 0px 32px 16px">
          <Text size="36px" color="#455154" bold>
            {id} 님의
          </Text>
          <Text size="36px" color="#455154" bold>
            프로젝트 리스트
          </Text>
        </Grid>
        <ProjectList />
      </Grid>
      <AddListWrap>
<<<<<<< HEAD
        <ProjectAddList></ProjectAddList>
=======
        <ProjectAddList ></ProjectAddList>
>>>>>>> 0e3444ab298a9a242b0eecaf7628a025974b5dd2
      </AddListWrap>
    </React.Fragment>
  );
};

const AddListWrap = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100px;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
`;

export default Project;
