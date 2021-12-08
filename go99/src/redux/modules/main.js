import { createAction, handleActions } from 'redux-actions';
import { current,produce } from "immer";
import { apis } from '../../api/axios';

// api이후 삭제
import axios from "axios";

// Actions
const SET_CIRCLE = "SET_CIRCLE"; // 프로젝트 조회하기


// Action Creators
const setCircles = createAction(SET_CIRCLE, (list) => ({list}));


// initialState
const initialState = {
  circles: [],
};

// middlewear
const setCirclesDB = (list) => {
    return function (dispatch,getState,{history}) {
        // const id = 'id'
        // apis
        // .getCircles((`/api/projects/?userID:=${id}`)).then((res) => {
        //     const circleArr = res.data.result
        //     console.log("정상적으로 circle를 가져왔습니다.");
        //     dispatch(setCircles(circleArr))
        // })
        // .catch((err) => {
        //     console.log("에러", err);
        // });
        axios
        .get("https://run.mocky.io/v3/10c496e1-a5ba-4fcd-a0a9-d697131e9e17" )
        .then((res) => {
            // 페이지 렌더링시 서버에 요청하여 해당 프로젝트의 circles리스트를 가져옵니다.
            const circleArr = res.data.result
            // 가져온 리스트를 리덕스로 디스패치합니다.
            console.log("정상적으로 circle를 가져왔습니다.");
            dispatch(setCircles(circleArr))
        })
        .catch((err) => {
            console.log("에러", err);
        });
    }
}


// Reducer
export default handleActions(
  {
    [SET_CIRCLE]: (state, action) => produce(state, (draft) => {
        draft.circles = action.payload.list
      }),
  },
  initialState
);

const actionCreators = {
    setCircles,setCirclesDB
};

export { actionCreators };
