import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Text, ImageButton, Grid } from "../elements/elementsIndex";
import { useSelector, useDispatch } from "react-redux";
import { loadProject } from "../redux/modules/project";

const ProjectList = () => {
  const [arr, setArr] = useState([]);
<<<<<<< HEAD
=======

>>>>>>> 4f3b92594bdc43d7b14a17cce7a085b28784cd78

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/db4f9609-1596-47ca-a4f8-3454ac265db0")
      .then((res) => {
        const projectData = res.data.project;
<<<<<<< HEAD
=======

>>>>>>> 4f3b92594bdc43d7b14a17cce7a085b28784cd78
        setArr(projectData);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  }, []);

  return (
    <React.Fragment>
      {arr.map((item, index) => {
        return (
          <Grid padding="16px" key={index}>
            <Grid is_flex>
              <Text size="36px" bold="bold" color="#455154" margin="0px 10px">
                {item.projects_name}
              </Text>
              <ImageButton margin="0px 0px 0px auto" />
              <ImageButton margin="0px 10px" deleteIcon />
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
