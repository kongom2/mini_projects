import React, { useState, useEffect } from "react";
import { Grid, AddButton, Input } from "../elements/elementsIndex";

import { actionCreators as projectActions } from "../redux/modules/project";
import { useSelector, useDispatch } from "react-redux";

const AddList = (props) => {
  const dispatch = useDispatch();
  const [projects_name, setProjectText] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setProjectText(e.target.value);
  };
  const write = () => {
    console.log(projects_name);
    dispatch(projectActions.addProjectDB(projects_name));
    setProjectText("");
  };

  useEffect(() => {
    dispatch(projectActions.addProjectDB(projects_name));
  }, []);
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
          onSubmit={write}
        />
        <AddButton
          width="50px"
          padding="0 10.4px"
          _onClick={() => {}}
        ></AddButton>
      </Grid>
    </React.Fragment>
  );
};

export default AddList;
