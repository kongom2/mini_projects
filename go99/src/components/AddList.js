import React from "react";
import { Grid, AddButton, Input } from "../elements/elementsIndex";

const AddList = () => {
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
          onKeyPress={() => {}}
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
