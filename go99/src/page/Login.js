import React, { useState } from "react";
// component, element 불러오기
import {} from "../components/componentIndex";
import { Text, Input, Button, Grid } from "../elements/elementsIndex";

const Login = () => {
  const [changeText, setChangeText] = useState("");
  const [feedback, setFeedback] = useState();

  return (
    <React.Fragment>
      <Grid padding="0px 30px">
        <Grid padding="0px 0px 32px 16px">
          <Text size="36px" color="#455154" bold>
            Welcome
          </Text>
          <Text size="36px" color="#455154" bold>
            to Todo99
          </Text>
        </Grid>

        <Input
          // 입력 변경 값 이벤트
          _onChange={() => {}}
          padding="16px"
          margin="5px 0px"
          fontSize="16px"
          placeholder="아이디를 입력해주세요"
          bg="#F4F6F6"
          border="0px"
        />
        <Input
          // 입력 변경 값 이벤트
          _onChange={() => {}}
          padding="16px"
          margin="5px 0 10px 0"
          fontSize="16px"
          placeholder="비밀번호를 입력해주세요"
          bg="#F4F6F6"
          border="0px"
        />
        <Button
          // 클릭 이벤트
          _onClick={() => {}}
          padding="16px"
          margin="10px 0 5px 0"
          fontSize="16px"
        >
          Todo99 로그인
        </Button>
        <Button
          // 클릭 이벤트
          _onClick={() => {}}
          padding="16px"
          margin="5px 0px"
          fontSize="16px"
          bg="#4788F8"
        >
          회원가입
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
