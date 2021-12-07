import React from "react";
// component, element 불러오기
import { Header } from "../components/componentIndex";
import { Text, ProjectList, AddList, Grid } from "../elements/elementsIndex";

const Project = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Grid>
        <Text size="36px">kongom2님의 프로젝트 리스트</Text>
        <ProjectList></ProjectList>
        <AddList></AddList>
      </Grid>
    </React.Fragment>
  );
};

export default Project;
