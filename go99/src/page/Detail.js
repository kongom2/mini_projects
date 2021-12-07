import React from "react";
import styled from "styled-components";
// component, element 불러오기
import { AddList, TodoList, Feedback } from "../components/componentIndex";
import { Text, Grid } from "../elements/elementsIndex";

const Detail = () => {
  return (
    <React.Fragment>
      <Grid padding="104px 20px 350px 20px">
        <Grid padding="0px 0px 32px 16px">
          <Text size="36px" color="#455154" bold>
            오늘 할 일
          </Text>
        </Grid>
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
      </Grid>
      <CommentBox>
        <AddList></AddList>
        <Feedback></Feedback>
      </CommentBox>
    </React.Fragment>
  );
};

const CommentBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100px;
  position: fixed;
  bottom: 240px;
  background-color: #fff;
`;

export default Detail;
