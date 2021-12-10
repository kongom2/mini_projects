<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect,useState } from "react";
>>>>>>> b3fedd6fbfc314fc02fdf0913e506f7713428920
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// component, element 불러오기
import { ProjectList, AddList,ProjectAddList } from "../components/componentIndex";
import { Text, Grid } from "../elements/elementsIndex";
import { actionCreators as projectActions } from "../redux/modules/project";
import { apis } from "../api/axios";
import { history } from "../redux/configureStore";
import { actionCreators as projectActions } from "../redux/modules/user";

const Project = (props) => {
  const dispatch = useDispatch();
  const id = window.sessionStorage.getItem('id')
  const [projects_name, setProjectText] = useState("");


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
        <AddList
          placeholder="99일간의 프로젝트를 추가해 주세요"
          value={projects_name}
          _onChange={onChange}
          onSubmit={write}
        />
=======
        <ProjectAddList ></ProjectAddList>
>>>>>>> b3fedd6fbfc314fc02fdf0913e506f7713428920
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
