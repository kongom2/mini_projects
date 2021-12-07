import React from "react";
import styled from "styled-components";

// 라우터 불러오기
import { Route, BrowserRouter } from "react-router-dom";

// 페이지 불러오기
import { Header } from "../components/componentIndex";
import Login from "../page/Login";
import Main from "../page/Main";
import EditProject from "../page/EditProject";
import Project from "../page/Project";
import Detail from "../page/Detail";
import Signup from "../page/Signup";

function App() {
  return (
    <BrowserRouter>
      <BackImg>
        <Wrap>
          <Header></Header>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />

          <Route path="/project" exact component={Project} />
          <Route path="/project/:projectID/edit" exact component={EditProject} />
          
          <Route path="/main/:projectID" exact component={Main} />
          <Route path="/main/:projectID/detail" exact component={Detail} />
        </Wrap>
      </BackImg>
    </BrowserRouter>
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
`;

export default App;
