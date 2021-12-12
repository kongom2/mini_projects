import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Grid,Trackers,Button } from "../elements/elementsIndex";
import { actionCreators as circleActions } from '../redux/modules/main'
import { apis } from '../api/axios';

const TrackersList = (props) => {

  const projectTitle = props.project_title
  const project_id = props.project_id


  const id = project_id
  // 디스패치 히스토리
  const history = useHistory();
  const dispatch = useDispatch();

 

  // 리덕스에서 circles를 가져옵니다.
  const circleArr = useSelector((state) => state.main.circles);

  return (
      <Grid height='auto'>
          {circleArr.map((list,idx) => {
            return(
              <Trackers list={list} _onClick={() => {history.push(`/main/${projectTitle}/${list.circles_id}`)}} key={idx}></Trackers>
            )
          })}
      </Grid>
  )
};

export default TrackersList;
