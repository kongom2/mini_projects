import React from "react";
import styled from "styled-components";
import { AddList, ProjectList } from "../components/componentIndex";

function App() {
  return (
    <BackImg>
      <Wrap>
        <AddList></AddList>
        <ProjectList></ProjectList>
        <ProjectList></ProjectList>
        <ProjectList></ProjectList>
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
