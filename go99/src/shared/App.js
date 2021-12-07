import React from "react";
import styled from "styled-components";
import { TrackersList,Header,WeekList,Feedback } from "../components/componentIndex";
import Grid from "../elements/Grid";
import Main from "../page/Main";

function App() {
  return (
    <BackImg>
      <Wrap>
          <Feedback></Feedback>
      </Wrap>
    </BackImg>
  );
}

// background color or image
const BackImg = styled.div`
  background-color: #eee;
  height: 150%;
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
  padding: 120px 0 40px 0;
`;

export default App;
