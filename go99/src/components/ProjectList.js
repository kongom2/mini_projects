import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Text, ImageButton, Grid } from "../elements/elementsIndex";
import { useSelector } from "react-redux";

const ProjectList = () => {
  const [data, setData] = useState("");
  console.log(data);
  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/db4f9609-1596-47ca-a4f8-3454ac265db0")
      .then((res) => {
        console.log(res.data.project);
        const projectData = res.data.project;
        setData(projectData);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  }, []);
  // const projectData = useSelector((state) => state.project.project);
  return (
    <React.Fragment>
      {data.map((item, index) => {
        <Grid padding="16px" key={index}>
          <Grid is_flex>
            <Text size="36px" bold="bold" color="#455154" margin="0px 10px">
              {item.projects_name}
            </Text>
            <ImageButton margin="0px 0px 0px auto" />
            <ImageButton margin="0px 10px" deleteIcon />
          </Grid>
          <Hr />
        </Grid>;
      })}
    </React.Fragment>
  );
};

export default ProjectList;

const Hr = styled.hr`
  margin: 20px 0px 0px 0px;
`;
