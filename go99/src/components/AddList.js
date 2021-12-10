import React, { useState, useEffect, useRef } from "react";
import { Grid, AddButton, Input } from "../elements/elementsIndex";

import { actionCreators as detailActions } from "../redux/modules/detail";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";

const AddList = (props) => {
  const dispatch = useDispatch();

  // circles_id 불러오기
  const pathName = history.location.pathname;
  const name = pathName.split("/");
  const circles_id = name[3];
  console.log(circles_id);

  const [todo_content, setTodoText] = useState();

  // todos_id 불러오기
  const todo_list = useSelector((state) => state.detail.list);

  const onChange = (e) => {
    console.log(e.target.value);
    setTodoText(e.target.value);
  };

  const inputRef = useRef();
  const write = () => {
    console.log(todo_content);
    const list = {
      todos_id: circles_id + Date(),
      todo_content: todo_content,
      circles_id: circles_id,
    };
    console.log(list);
    setTodoText("");
    dispatch(detailActions.addTodosDB({ list }));
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
          placeholder="오늘의 느낀점을 남겨주세요"
          ref={inputRef}
          Value={todo_content}
          _onChange={onChange}
          onSubmit={write}
        />
        <AddButton width="50px" padding="0 10.4px" onClick={write}></AddButton>
      </Grid>
    </React.Fragment>
  );
};

export default AddList;
