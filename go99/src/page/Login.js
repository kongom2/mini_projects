import React from "react";
// component, element 불러오기
import {} from "../components/componentIndex";
import { Text, Input, Button } from "../elements/elementsIndex";

const Login = () => {
  return (
    <React.Fragment>
      <Text size="36px">Todo99</Text>
      <Input />
      <Input />
      <Button></Button>
      <Button></Button>
    </React.Fragment>
  );
};

export default Login;
