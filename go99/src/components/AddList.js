import React, { useState, useEffect } from "react";
import { Grid, AddButton, Input } from "../elements/elementsIndex";

import { actionCreators as detailActions } from "../redux/modules/detail";
import { useSelector, useDispatch } from "react-redux";

const AddList = (props) => {
  const dispatch = useDispatch();

  // const addProject = () => {
  //   dispatch(detailActions.addProjectDB());
  // };

  const [todo_content, setTodoText] = useState();

  const { todos_id } = props;

  const onChange = (e) => {
    console.log(e.target.value);
    setTodoText(e.target.value);
  };
  const write = () => {
    console.log(todo_content);
    dispatch(detailActions.addTodosDB(todos_id, todo_content));
    setTodoText("");
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
