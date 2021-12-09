import { createAction, handleActions } from 'redux-actions';
import { current,produce } from "immer";
import { apis } from '../../api/axios';

// api이후 삭제
import axios from "axios";

// Actions
const SET_FEED = "SET_FEED"; // 프로젝트 조회하기
const ADD_FEED = "ADD_FEED"; // 프로젝트 조회하기
const EDIT_FEED = "EDIT_FEED"; // 프로젝트 조회하기
const DELETE_FEED = "DELETE_FEED"; // 프로젝트 조회하기


// Action Creators
const setFeedBack = createAction(SET_FEED, (feedback) => ({feedback}));
const addFeedBack = createAction(ADD_FEED, (feedback) => ({feedback}));
const editFeedBack = createAction(EDIT_FEED, (feedback) => ({feedback}));
const deleteFeedBack = createAction(DELETE_FEED, (feedback) => ({feedback}));


// initialState
const initialState = {
    contents: '',
    empty:''
};

// middlewear
const setFeedBackDB = (id) => {
    return function (dispatch,getState,{history}) {
        // apis
        // .getFeedBack(`/api/circles/${circles_id}/feedback`)
        axios
        .get("https://run.mocky.io/v3/10c496e1-a5ba-4fcd-a0a9-d697131e9e17" )
        .then((res) => {
            console.log('정상적으로 피드백을 가져왔습니다.')
            const feedback = 'ss'
            dispatch(setFeedBack(feedback))
        })
        .catch((err) => {
            console.log("에러", err);
        });
    }
}

const addFeedBackDB = (id) => {
    return function (dispatch,getState,{history}) {
        // apis
        //.addFeedBack(`/api/circles/${circles_id}/feedback`,contents)
        axios
        .get("https://run.mocky.io/v3/10c496e1-a5ba-4fcd-a0a9-d697131e9e17" )
        .then((res) => {
            console.log('애드 피드백.')
            const feedback = '새로운 값입니다'
            dispatch(addFeedBack(feedback))
            alert('피드백이 등록되었습니다')
        })
        .catch((err) => {
            console.log("에러", err);
        });
    }
}

const editFeedBackDB = (id) => {
    return function (dispatch,getState,{history}) {
        // apis
        //.editFeedBack(`/api/circles/${circles_id}/feedback`,contents)
        axios
        .get("https://run.mocky.io/v3/10c496e1-a5ba-4fcd-a0a9-d697131e9e17" )
        .then((res) => {
            console.log('피드백을 수정합니다.')
            const feedback = '수정한내용'
            dispatch(editFeedBack(feedback))
            alert('피드백이 수정되었습니다')
            window.location.reload()
        })
        .catch((err) => {
            console.log("에러", err);
        });
    }
}

const deleteFeedBackDB = (id) => {
    return function (dispatch,getState,{history}) {
        // apis
        //.deleteFeedBack(`/api/circles/${circles_id}/feedback`,id)
        axios
        .get("https://run.mocky.io/v3/10c496e1-a5ba-4fcd-a0a9-d697131e9e17" )
        .then((res) => {
            console.log('피드백을 삭제합니다.')
            const feedback = ''
            dispatch(deleteFeedBack(feedback))
            alert('피드백이 삭제되었습니다')
            window.location.reload()
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
        draft.contents = action.payload.feedback
        draft.empty = action.payload.feedback
    }),
    [ADD_FEED]: (state, action) => produce(state, (draft) => {

        draft.contents = action.payload.feedback
        draft.empty = action.payload.feedback

    }),
    [EDIT_FEED]: (state, action) => produce(state, (draft) => {
        draft.contents = action.payload.feedback
        draft.empty = action.payload.feedback
    }),
    [DELETE_FEED]: (state, action) => produce(state, (draft) => {
        draft.contents = action.payload.feedback
        draft.empty = ''
    }),
  },
  initialState
);

const actionCreators = {
    setFeedBack,
    setFeedBackDB,
    deleteFeedBack,
    deleteFeedBackDB,
    addFeedBack,
    addFeedBackDB,
    editFeedBack,
    editFeedBackDB
};

export { actionCreators };
