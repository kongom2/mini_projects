import React, { useEffect,useState } from "react";
import { Grid, Text } from "../elements/elementsIndex";
import { TrackersList } from "../components/componentIndex";
import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";

const Main = (props) => {
  const pathName = history.location.pathname;
  const name = pathName.split("_");
  const title = name[0].split('/')
  const id = window.sessionStorage.getItem('id')
  const nickName = window.sessionStorage.getItem("nickname");
  const is_session = localStorage.getItem("token")

  useEffect(() => {
    if (!is_session) {
      alert("로그인 정보가 없습니다!");
      history.replace("/");
    }
  }, []);

  // const day = useSelector((state) => state.main.circles[0])
  // const data = {...day}
  // const startDay = data.circles_date
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
