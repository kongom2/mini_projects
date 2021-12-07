import React from "react";
// component, element 불러오기
import { Header } from "../components/componentIndex";
import { Text, Input, Button, Grid } from "../elements/elementsIndex";

const EditProject = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Grid>
        <Text size="36px">프로젝트 수정</Text>
        <Input />
        <Button></Button>
      </Grid>
    </React.Fragment>
  );
};

export default EditProject;
