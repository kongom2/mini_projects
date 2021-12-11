import React, { useState } from "react";
import { Grid, AddButton, Input } from "../elements/elementsIndex";

import { actionCreators as detailActions } from "../redux/modules/detail";
import { useDispatch } from "react-redux";

const AddList = (props) => {
  const { _onClick, circles_id, todos_id } = props;

  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState();

  const onChange = (e) => {
    setTodoText(e.target.value);
  };

  let date = new Date();
  let day = date.getDate(); // 시
  let hours = date.getHours(); // 시
  let minutes = date.getMinutes(); // 분
  let seconds = date.getSeconds(); // 초
  const moment = `${day}${hours}${minutes}${seconds}`;

  // const data = {
  //   circles_id: circles_id,
  //   todo_content: todoText,
  //   todos_id: `${circles_id}_${moment}`,
  // };

  const data = {
    circles_id: circles_id,
    todo_content: todoText,
    todos_id: `${circles_id}_${moment}`,
    todo_check: false,
  };

  const addTodos = () => {
    if (todoText === "") {
      window.alert("오늘 할 일을 입력해주세요!");
      return;
    }
    setTodoText("");
    dispatch(detailActions.addTodosDB(circles_id, data));
  };

  return (
    <React.Fragment>
      <Grid
        is_flex
        border="1px solid #D2D2D2"
        padding="16px"
        borderRadius="10px 10px 0 0"
      >
        <Input
          padding="16px"
          margin="0 20px 0 0"
          placeholder="오늘 할일은 무엇인가요?"
          Value={todoText}
          _onChange={onChange}
          onSubmit={addTodos}
        />
        <AddButton
          width="50px"
          padding="0 10.4px"
          _onClick={addTodos}
        ></AddButton>
      </Grid>
    </React.Fragment>
  );
};

export default AddList;
