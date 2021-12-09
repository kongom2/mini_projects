import React,{useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux'
import axios from "axios";
import { Grid,Text } from "../elements/elementsIndex";
import { TrackersList,WeekList } from "../components/componentIndex";
import { history } from "../redux/configureStore";
import { actionCreators as circleActions } from '../redux/modules/main'
import {apis} from '../api/axios'

const Main = (props) => {
    
    // useEffect(() => {
    //     const token = localStorage.getItem("token")
    //     apis
    //     .loginCheck('/api/users/me', token)
    //     .then((res) => {
    //         return res
    //     })
    //     .catch((err) => {
    //         alert('로그인 정보가 없습니다!')
    //         history.push('/')
    //     })
    // },[])

    return(
        <React.Fragment>
            <Grid padding='104px 20px 0 20px' margin='0 0 10% 0'>
                <Text size= '2rem' bold>정연재 님의</Text>  {/* 이후에 id값 */}
                <Text size='3rem' bold>항해 99 !!</Text>  {/* 이후에 project값 */}
            </Grid>
            <Grid padding='0 20px' width='100%' height='auto' is_flex>
                <TrackersList></TrackersList>
            </Grid>
        </React.Fragment>
    )
}



export default Main