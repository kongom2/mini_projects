import React, { useEffect } from "react";
import styled from "styled-components";
import { apis } from "../api/axios";
import { history } from "../redux/configureStore";

// component, element 불러오기
import { AddList, TodoList, Feedback } from "../components/componentIndex";
import { Text, Grid } from "../elements/elementsIndex";
import { useSelector, useDispatch } from "react-redux";

const Detail = (props) => {
  // 디스패치, 히스토리 선언

  const { history } = props;
  const pathName = history.location.pathname;
  const name = pathName.split("/");

  const is_session = localStorage.getItem("token");

  React.useEffect(() => {
    if (!is_session) {
      alert("로그인 정보가 없습니다!");
      history.replace("/");
    }
  }, []);

  return (
    <React.Fragment>
      <Grid padding="104px 20px 350px 20px">
        <Grid padding="0px 0px 32px 16px">
          <Text size="36px" color="#455154" bold>
            오늘 할 일
          </Text>
        </Grid>
        <TodoList circles_id={name[3]} />
      </Grid>
      <CommentBox>
        <AddList circles_id={name[3]}></AddList>
        <Feedback project_title={name[2]} circles_id={name[3]}></Feedback>
      </CommentBox>
    </React.Fragment>
  );
};

const CommentBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100px;
  position: fixed;
  bottom: 200px;
  background-color: #fff;
`;

export default Detail;
