import React from "react";
import styled from "styled-components";
// component, element 불러오기
import { ProjectList, AddList } from "../components/componentIndex";
import { Text, Grid } from "../elements/elementsIndex";

const Project = () => {
  return (
    <React.Fragment>
      <Grid padding="104px 20px">
        <Grid padding="0px 0px 32px 16px">
          <Text size="36px" color="#455154" bold>
            kongom2 님의
          </Text>
          <Text size="36px" color="#455154" bold>
            프로젝트 리스트
          </Text>
        </Grid>
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
      </Grid>
      <AddListWrap>
        <AddList></AddList>
      </AddListWrap>
    </React.Fragment>
  );
};

const AddListWrap = styled.div`
  width: 500px;
  height: 100px;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
`;

export default Project;
