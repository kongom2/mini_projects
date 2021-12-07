import React from "react";
// component, element 불러오기
import { Header } from "../components/componentIndex";
import { Text, Input, Button, Grid } from "../elements/elementsIndex";

const Signup = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Grid>
        <Text size="36px">회원가입</Text>
        <Input />
        <Input />
        <Input />
        <Input />
        <Button></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Signup;
