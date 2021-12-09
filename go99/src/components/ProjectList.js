import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Text, ImageButton, Grid } from "../elements/elementsIndex";
import { actionCreators as projectActions } from "../redux/modules/project";
import { useSelector, useDispatch } from "react-redux";

const ProjectList = () => {
  // 디스패치, 히스토리 선언
  const dispatch = useDispatch();
  const history = useHistory();

  // 데이터 선택
  const project_list = useSelector((state) => state.project.list);

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
              <div style={{ cursor: "pointer" }}>
                <Text
                  size="36px"
                  bold="bold"
                  color="#455154"
                  margin="0px 10px"
                  _onClick={() => {
                    history.push(`main/${item.projects_name}`);
                  }}
                >
                  {item.projects_name}
                </Text>
                <ImageButton
                  margin="0px 0px 0px auto"
                  _onClick={() => {
                    console.log("수정버튼");
                    dispatch(projectActions.editProject(item));
                  }}
                />
                <ImageButton
                  margin="0px 10px"
                  deleteIcon
                  key={index}
                  _onClick={() => {
                    dispatch(projectActions.deleteProject(item.project_id));
                  }}
                />
              </div>
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
