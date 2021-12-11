import React from "react";
import styled from "styled-components";

// 라우터 불러오기
import { Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
=======
import { ConnectedRouter } from "connected-react-router"
import { history } from '../redux/configureStore';
>>>>>>> c96c9c537219721ec64a4a037252619524f1acdd

// 페이지 불러오기
import { Header } from "../components/componentIndex";
import Login from "../page/Login";
import Main from "../page/Main";
import EditProject from "../page/EditProject";
import Project from "../page/Project";
import Detail from "../page/Detail";
import Signup from "../page/Signup";
import NotFound from "../page/NotFound";

function App() {
  return (
    <ConnectedRouter history={history}>
      <BackImg>
        <Wrap>
          <Header></Header>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />

            <Route path="/project" exact component={Project} />
            <Route
              path="/project/:projectID/edit"
              exact
              component={EditProject}
            />

            <Route path="/main/:projectID" exact component={Main} />
            <Route path="/main/:projectID/:detailID" exact component={Detail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Wrap>
      </BackImg>
    </ConnectedRouter>
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
