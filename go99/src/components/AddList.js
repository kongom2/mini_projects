import React, { useState, useEffect } from "react";
import { Grid, AddButton, Input } from "../elements/elementsIndex";

import { useSelector, useDispatch } from "react-redux";

const AddList = (props) => {
  // props
  const {
    onSubmit,

    // input props
    type,
    _onChange, // input 값 변경 감지
    placeholder, //placeholder 기입
    value, // 텍스트 추출
    ref,
  } = props;

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
          ref={ref}
          type={type}
          onChange={_onChange}
          placeholder={placeholder}
          defaultValue={value}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSubmit(e);
            }
          }}
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

// Input DefaultProps
Input.defaultProps = {
  width: "100%",
  height: null,
  padding: null,
  margin: null,
  placeholder: "텍스트를 입력해주세요",
  bg: "#fff",
  border: "1px solid #ccc",
  type: "text",
  fontSize: "16px",
  onSubmit: () => {},
  _onChange: () => {},
  value: () => {},
};

export default AddList;
