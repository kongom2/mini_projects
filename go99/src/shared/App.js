import React from "react";
import styled from "styled-components";
import {
  Grid,
  Input,
  Text,
  AddButton,
  Button,
} from "../elements/elementsIndex";
import Header from "../components/Header";

function App() {
  return (
    <BackImg>
      <Wrap>
        <Header></Header>
        <Button widht="368px">Todo99 로그인 하기</Button>
      </Wrap>
    </BackImg>
  );
}

// background color or image
const BackImg = styled.div`
  background-color: #eee;
`;

// Wrap 스타일드 컴포넌트
const Wrap = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  padding: 120px 30px 40px 30px;
`;

export default App;
