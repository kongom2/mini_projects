import { createAction, handleActions } from 'redux-actions';
import { current,produce } from "immer";
import { apis } from '../../api/axios';

// api이후 삭제
import axios from "axios";

// Actions
const SET_FEED = "SET_FEED"; // 프로젝트 조회하기


// Action Creators
const setFeedBack = createAction(SET_FEED, (feedback) => ({feedback}));


// initialState
const initialState = {
    contents: '',
};

// middlewear
const setFeedBackDB = (id) => {
    return function (dispatch,getState,{history}) {
        axios
        .get("https://run.mocky.io/v3/10c496e1-a5ba-4fcd-a0a9-d697131e9e17" )
        .then((res) => {
            console.log('정상적으로 피드백을 가져왔습니다.')
            const feedback = res.data.result[0].feedBack
            dispatch(setFeedBack(feedback))
        })
        .catch((err) => {
            console.log("에러", err);
        });
    }
}


// Reducer
export default handleActions(
  {
    [SET_FEED]: (state, action) => produce(state, (draft) => {
        console.log(action.payload.feedback)
        draft.contents = action.payload.feedback
      }),
  },
  initialState
);

const actionCreators = {
    setFeedBack,setFeedBackDB
};

export { actionCreators };
