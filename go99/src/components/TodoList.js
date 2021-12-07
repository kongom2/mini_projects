import React from "react";
import styled from "styled-components";
import {
  Text,
  ImageButton,
  Grid,
  CheckCircle,
} from "../elements/elementsIndex";

const TodoList = (props) => {
  const { is_complete } = props;

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid is_flex>
          {is_complete === true ? (
            <CheckCircle completeColor />
          ) : (
            <CheckCircle />
          )}
          <Text size="24px" bold="bold" color="#455154" margin="0px 10px">
            Todo99
          </Text>
          <ImageButton margin="0px 0px 0px auto" />
          <ImageButton margin="0px 10px" deleteIcon />
        </Grid>
        <Hr />
      </Grid>
    </React.Fragment>
  );
};

export default TodoList;

TodoList.defaultProps = {
  is_complete: false,
};

const Hr = styled.hr`
  margin: 20px 0px 0px 0px;
`;
