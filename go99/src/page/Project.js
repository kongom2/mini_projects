import React from "react";
// component, element 불러오기
import { ProjectList, AddList } from "../components/componentIndex";
import { Text, Grid } from "../elements/elementsIndex";

const Project = () => {
  return (
    <React.Fragment>
      <Grid padding="0px 30px">
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

        <AddList></AddList>
      </Grid>
    </React.Fragment>
  );
};

export default Project;
