import React, { useState, useEffect, useRef } from "react";
import { Grid, AddButton, Input } from "../elements/elementsIndex";

import { actionCreators as detailActions } from "../redux/modules/detail";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";

const AddList = (props) => {
<<<<<<< HEAD
  const dispatch = useDispatch();

  // circles_id 불러오기
  const pathName = history.location.pathname;
  const name = pathName.split("/");
  const circles_id = name[3];
  console.log(circles_id);

  const [todo_content, setTodoText] = useState();

  // todos_id 불러오기
  const todo_list = useSelector((state) => state.detail.list);

=======

  const {_onClick, circles_id, todos_id} = props

  const dispatch = useDispatch();

  const [todo_content, setTodoText] = useState();

>>>>>>> 0e3444ab298a9a242b0eecaf7628a025974b5dd2
  const onChange = (e) => {
    setTodoText(e.target.value);
  };

<<<<<<< HEAD
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
=======
  let date = new Date()
  let day = date.getDate(); // 시
  let hours = date.getHours(); // 시
  let minutes = date.getMinutes();  // 분
  let seconds = date.getSeconds();  // 초
  const moment = `${day}${hours}${minutes}${seconds}`

  const data = {  
    circles_id:circles_id,
    todo_content:todo_content,
    todos_id:`${circles_id}_${moment}`
  }

  console.log(moment)
  console.log(data)

  const addTodos = () => {
    dispatch(detailActions.addTodosDB(circles_id, data));
>>>>>>> 0e3444ab298a9a242b0eecaf7628a025974b5dd2
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
        />
<<<<<<< HEAD
        <AddButton width="50px" padding="0 10.4px" onClick={write}></AddButton>
=======
        <AddButton width="50px" padding="0 10.4px" _onClick={addTodos}></AddButton>
>>>>>>> 0e3444ab298a9a242b0eecaf7628a025974b5dd2
      </Grid>
    </React.Fragment>
  );
};

export default AddList;
