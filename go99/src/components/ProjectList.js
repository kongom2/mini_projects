import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text, ImageButton, Grid } from "../elements/elementsIndex";
import { actionCreators as projectActions } from "../redux/modules/project";
import { useSelector, useDispatch } from "react-redux";

const ProjectList = () => {
  // 디스패치 선언
  const dispatch = useDispatch();

  // 데이터 선택
  const project_list = useSelector((state) => state.project.list);
  const projects_id = useSelector((state) => state.project.projects_id);
  console.log(projects_id);

  // const deleteProject = () => {
  //   dispatch(projectActions.deleteProjectDB(projects_id));
  // };

  // DB에서 불러오기
  useEffect(() => {
    dispatch(projectActions.getProjectDB());
  }, []);

  return (
    <React.Fragment>
      {project_list.map((item, index) => {
        return (
          <Grid padding="16px" key={index}>
            <Grid is_flex>
              <Text
                size="36px"
                bold="bold"
                color="#455154"
                margin="0px 10px"
                _onClick={() => {}}
              >
                {item.projects_name}
              </Text>
              <ImageButton margin="0px 0px 0px auto" _onClick={() => {}} />
              <ImageButton margin="0px 10px" deleteIcon _onClick={() => {}} />
            </Grid>
            <Hr />
          </Grid>
        );
      })}
    </React.Fragment>
  );
};

export default ProjectList;

const Hr = styled.hr`
  margin: 20px 0px 0px 0px;
`;
