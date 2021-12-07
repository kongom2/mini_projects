import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// component, element 불러오기
import { ProjectList, AddList } from "../components/componentIndex";
import { Text, Grid } from "../elements/elementsIndex";

const Project = () => {
  // useEffect(() => {
  //   axios
  //     .get("https://run.mocky.io/v3/db4f9609-1596-47ca-a4f8-3454ac265db0")
  //     .then((result) => {
  //       console.log(result.data.project);
  //     })
  //     .catch((err) => {
  //       console.log("에러", err);
  //     });
  // }, []);

  return (
    <React.Fragment>
      <Grid padding="104px 20px">
        <Grid padding="0px 0px 32px 16px">
          <Text size="36px" color="#455154" bold>
            kongom2 님의
          </Text>
          <Text size="36px" color="#455154" bold>
            프로젝트 리스트
          </Text>
        </Grid>
        <ProjectList />
      </Grid>
      <AddListWrap>
        <AddList></AddList>
      </AddListWrap>
    </React.Fragment>
  );
};

const AddListWrap = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100px;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
`;

export default Project;
