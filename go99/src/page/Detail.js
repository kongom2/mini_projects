import React from "react";
// component, element 불러오기
import { AddList, TodoList, Feedback } from "../components/componentIndex";
import { Text, Grid } from "../elements/elementsIndex";

const Detail = () => {
  return (
    <React.Fragment>
      <Grid padding="0px 30px">
        <Grid padding="0px 0px 32px 16px">
          <Text size="36px" color="#455154" bold>
            오늘 할 일
          </Text>
        </Grid>
        <TodoList />
        <TodoList />
        <TodoList />
        <AddList></AddList>
        <Feedback></Feedback>
      </Grid>
    </React.Fragment>
  );
};

export default Detail;
