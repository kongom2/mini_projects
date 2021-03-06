import React, { useState, useEffect, useRef } from "react";
import { Grid, AddButton, Input } from "../elements/elementsIndex";

import { actionCreators as projectActions } from "../redux/modules/project";
import { useSelector, useDispatch } from "react-redux";

const AddList = (props) => {
  const id = window.sessionStorage.getItem("id");

  const dispatch = useDispatch();
  const [projects_name, setProjectText] = useState("");

  const onChange = (e) => {
    setProjectText(e.target.value);
  };

  const inputRef = useRef();

  const addProject = () => {
    if (setProjectText === "") {
      window.alert("오늘 할 일을 입력해주세요!");
      return;
    }
    const data = {
      project_title: projects_name,
      userId: id,
    };
    setProjectText("");
    dispatch(projectActions.addProjectDB(data));
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
          placeholder="99일간의 프로젝트를 추가해 주세요"
          value={projects_name}
          _onChange={onChange}
          onSubmit={addProject}
        />
        <AddButton
          width="50px"
          padding="0 10.4px"
          _onClick={addProject}
        ></AddButton>
      </Grid>
    </React.Fragment>
  );
};

export default AddList;
