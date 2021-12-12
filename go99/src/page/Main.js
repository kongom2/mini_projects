import React, { useEffect,useState } from "react";
import { Grid, Text } from "../elements/elementsIndex";
import { TrackersList } from "../components/componentIndex";
import { history } from "../redux/configureStore";
import { useSelector,useDispatch } from "react-redux";
import { actionCreators as circleActions } from '../redux/modules/main'
const Main = (props) => {
  const dispatch = useDispatch()
  const pathName = history.location.pathname;
  const name = pathName.split("_");
  const title = name[0].split('/')
  const nickName = window.sessionStorage.getItem("nickname");



  console.log('1번째 페이지 로딩')

  useEffect(() => {

    console.log('2번째 유즈이펙트 시작')
    dispatch(circleActions.setCirclesDB(name[1]))
  }, []);

  const day = useSelector((state) => state.main.circles[0])
  
  console.log(day)
  console.log('6번째는 아니겠지')





  // const [days,setDays] = useState()
  // const now = new Date()
  
  // let year = now.getFullYear(); // 년도
  // let month = now.getMonth() + 1;  // 월
  // let date = now.getDate();  // 날짜
  
  // const stDate = new Date(startDay) ;
  // const endDate = new Date(2021, 12, 12) ;
 
  // const btMs = endDate.getTime() - stDate.getTime() ;
  // const btDay = btMs / (1000*60*60*24) ;
 
 
  // console.log(btDay)



  return (
    <React.Fragment>
      <Grid padding="104px 20px 0 20px" margin="0 0 10% 0">
        <Text id="2rem" bold>
          {nickName}님의
        </Text>{" "}
        <Grid is_flex>
        <Text size="2.8rem" bold>
          {title[2]}99
        </Text>{" "}
        <Text size='1.5rem' margin='0 auto -1rem 20px' bold>

        </Text>
        </Grid>
      </Grid>
      <Grid padding="0 20px" width="100%" height="auto" is_flex>
        <TrackersList
          project_id={name[1]}
          project_title={title[2]}
        ></TrackersList>
      </Grid>
    </React.Fragment>
  );
};

export default Main;
