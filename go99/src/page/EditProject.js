import React from "react";
// component, element 불러오기
import {} from "../components/componentIndex";
import { Text, Input, Button, Grid } from "../elements/elementsIndex";

const EditProject = () => {
  return (
    <React.Fragment>
      <Grid padding="104px 20px 0 20px">
        <Grid padding="0px 0px 32px 16px">
          <Text size="36px" color="#455154" bold>
            프로젝트 수정
          </Text>
        </Grid>
        <Input
          // 입력 변경 값 이벤트
          _onChange={() => {}}
          padding="16px"
          margin="5px 0 10px 0"
          fontSize="16px"
          placeholder="프로젝트 이름을 입력해주세요"
          bg="#F4F6F6"
          border="0px"
        />
        <Button
          // 클릭 이벤트
          _onClick={() => {}}
          padding="16px"
          margin="10px 0 5px 0"
          fontSize="16px"
        >
          프로젝트 생성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default EditProject;
