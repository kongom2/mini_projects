import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../api/axios";

// Actions
const SET_FEED = "SET_FEED"; // 프로젝트 조회하기
const ADD_FEED = "ADD_FEED"; // 프로젝트 조회하기
const EDIT_FEED = "EDIT_FEED"; // 프로젝트 조회하기
const DELETE_FEED = "DELETE_FEED"; // 프로젝트 조회하기

// Action Creators
const setFeedBack = createAction(SET_FEED, (feedback) => ({ feedback }));
const addFeedBack = createAction(ADD_FEED, (feedback) => ({ feedback }));
const editFeedBack = createAction(EDIT_FEED, (feedback) => ({ feedback }));
const deleteFeedBack = createAction(DELETE_FEED, (feedback) => ({ feedback }));

// initialState
const initialState = {
  contents: "",
  empty: "",
};

// middlewear
const setFeedBackDB = (circles_id) => {
  return function (dispatch, getState, { history }) {
    // api
    apis
      .getFeedBack(circles_id)
      .then((res) => {
        // console.log('정상적으로 피드백을 가져왔습니다.')
        const feedback = res.data.feedback;
        dispatch(setFeedBack(feedback));
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
};

const addFeedBackDB = (data) => {
  return function (dispatch, getState, { history }) {
    const circles_id = data.circles_id;
    // console.log(circles_id);
    // console.log(data);
    // api
    apis
      .addFeedBack(circles_id, data)
      .then((res) => {
        console.log(res);
        const feedback = res.data.feedback;
        dispatch(addFeedBack(feedback));
        alert("피드백이 등록되었습니다");
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
};

const editFeedBackDB = (data) => {
  return function (dispatch, getState, { history }) {
    // console.log(data);
    const circles_id = data.circles_id;
    // api
    apis
      .editFeedBack(circles_id, data)
      .then((res) => {
        // console.log(res);
        const feedback = res.data.feedback;
        dispatch(editFeedBack(feedback));
        alert("피드백이 수정되었습니다");
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
};

const deleteFeedBackDB = (data) => {
  return function (dispatch, getState, { history }) {
    const circles_id = data.circles_id;
    const id = data.projects_id;

    const deleteData = {
      projects_id: id,
      circles_id: circles_id,
    };
    // console.log(deleteData);
    //api
    apis
      .deleteFeedBack(circles_id, deleteData)
      .then((res) => {
        // console.log("피드백을 삭제합니다.");
        // console.log(res);
        const feedback = res.data.feedback;
        dispatch(deleteFeedBack(feedback));
        alert("피드백이 삭제되었습니다");
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
};

// const deleteFeedBackDB = (circles_id, projects_title) => {
//   return function (dispatch, getState, { history }) {
//     const id = {
//       projects_title: projects_title,
//       circles_id: circles_id,
//     };

// //api
// apis
// .deleteFeedBack(circles_id,id)
// .then((res) => {
//     console.log('피드백을 삭제합니다.')
//     const feedback = ''
//     dispatch(deleteFeedBack(feedback))
//     alert('피드백이 삭제되었습니다')
//     window.location.reload()
// })
// .catch((err) => {
//     console.log("에러", err);
// });

//     axios
//       .get("https://run.mocky.io/v3/10c496e1-a5ba-4fcd-a0a9-d697131e9e17")
//       .then((res) => {
//         console.log("피드백을 삭제합니다.");
//         const feedback = "";
//         dispatch(deleteFeedBack(feedback));
//         alert("피드백이 삭제되었습니다");
//         window.location.reload();
//       })
//       .catch((err) => {
//         console.log("에러", err);
//       });
//   };
// };

// Reducer
export default handleActions(
  {
    [SET_FEED]: (state, action) =>
      produce(state, (draft) => {
        draft.contents = action.payload.feedback;
        draft.empty = action.payload.feedback;
      }),
    [ADD_FEED]: (state, action) =>
      produce(state, (draft) => {
        draft.contents = action.payload.feedback;
        draft.empty = action.payload.feedback;
      }),
    [EDIT_FEED]: (state, action) =>
      produce(state, (draft) => {
        draft.contents = action.payload.feedback;
        draft.empty = action.payload.feedback;
      }),
    [DELETE_FEED]: (state, action) =>
      produce(state, (draft) => {
        draft.contents = action.payload.feedback;
        draft.empty = "";
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
  editFeedBackDB,
};

export { actionCreators };
