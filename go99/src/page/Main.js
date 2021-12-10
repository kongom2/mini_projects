import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Grid, Text } from "../elements/elementsIndex";
import { TrackersList, WeekList } from "../components/componentIndex";
import { history } from "../redux/configureStore";
import { actionCreators as circleActions } from "../redux/modules/main";
import { actionCreators as userActions } from "../redux/modules/user";
import { apis } from "../api/axios";

const Main = (props) => {
  const dispatch = useDispatch()
  const { history } = props;
  const pathName = history.location.pathname;
  const name = pathName.split("_");
  const title = name[0].split('/')
  const id = window.sessionStorage.getItem('id')

  const is_session = localStorage.getItem("token")

  React.useEffect(() => {
    if (!is_session) {
      alert('로그인 정보가 없습니다!')
      history.replace("/");
    }
  }, []);
  
  return (
    <React.Fragment>
      <Grid padding="104px 20px 0 20px" margin="0 0 10% 0">
        <Text id="2rem" bold>
          {id}님의
        </Text>{" "}
        {/* 이후에 id값 */}
        <Text size="3rem" bold>
          {title[2]}99!!
        </Text>{" "}
        {/* 이후에 project값 */}
      </Grid>
      <Grid padding="0 20px" width="100%" height="auto" is_flex>
        <TrackersList project_id={name[1]} project_title={title[2]}></TrackersList>
      </Grid>
    </React.Fragment>
  );
};

export default Main;
