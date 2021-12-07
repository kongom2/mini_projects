import React from "react";
import styled from "styled-components";
import {
  Text,
  ImageButton,
  Grid,
  AddButton,
  Input,
} from "../elements/elementsIndex";

const ProjectList = () => {
  return (
    <React.Fragment>
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
