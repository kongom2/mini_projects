import React, { useEffect } from "react";
import styled from "styled-components";
// component, element 불러오기
import { ProjectList, ProjectAddList } from "../components/componentIndex";
import { Text, Grid } from "../elements/elementsIndex";
import { history } from "../redux/configureStore";

const Project = (props) => {
  const id = window.sessionStorage.getItem("id");
  const is_session = localStorage.getItem("token");

  useEffect(() => {
    if (!is_session) {
      alert("로그인 정보가 없습니다!");
      history.replace("/");
    }
  }, []);

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
        <ProjectAddList></ProjectAddList>
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
