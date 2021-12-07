import React from "react";
import styled from "styled-components";
import { Text, ImageButton, Grid } from "../elements/elementsIndex";
import { useSelector } from "react-redux";

const ProjectList = () => {
  const projectData = useSelector((state) => state.project.project);
  return (
    <React.Fragment>
      {projectData.map((p, idx) => {
        return (
          <Grid padding="16px" key={idx}>
            <Grid is_flex>
              <Text size="36px" bold="bold" color="#455154" margin="0px 10px">
                {p.project_title}
              </Text>
              <ImageButton margin="0px 0px 0px auto" />
              <ImageButton margin="0px 10px" deleteIcon />
            </Grid>
            <Hr />
          </Grid>
        );
      })}
      <Grid padding="16px">
        <Grid is_flex>
          <Text size="36px" bold="bold" color="#455154" margin="0px 10px">
            항해99
          </Text>
          <ImageButton margin="0px 0px 0px auto" />
          <ImageButton margin="0px 10px" deleteIcon />
        </Grid>
        <Hr />
      </Grid>
    </React.Fragment>
  );
};

export default ProjectList;

const Hr = styled.hr`
  margin: 20px 0px 0px 0px;
`;
