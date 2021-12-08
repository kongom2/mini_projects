import React,{useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux'
import axios from "axios";
import { Grid,Text } from "../elements/elementsIndex";
import { TrackersList,WeekList } from "../components/componentIndex";
import { history } from "../redux/configureStore";
import { actionCreators as circleActions } from '../redux/modules/main'


const Main = (props) => {
    
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