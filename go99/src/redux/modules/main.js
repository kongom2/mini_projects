import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../api/axios";

// Actions
const SET_CIRCLE = "SET_CIRCLE"; // 프로젝트 조회하기

// Action Creators
const setCircles = createAction(SET_CIRCLE, (list) => ({ list }));

// initialState
const initialState = {
  circles: [],
};
// middlewear
const setCirclesDB = (id) => {
  return function (dispatch, getState, { history }) {
    // console.log(id);

    // 프로젝트 아이디만 구하면 된다.
    const project_id = id;
    const userId = window.sessionStorage.getItem("id");
    // console.log(project_id, userId);
    apis
      .getCircles(project_id, userId)
      .then((res) => {
        // console.log(res.data.circles);
        // console.log("정상적으로 circle를 가져왔습니다.");
        const circleArr = res.data.circles;
        dispatch(setCircles(circleArr));
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
};

// Reducer
export default handleActions(
  {
    [SET_CIRCLE]: (state, action) =>
      produce(state, (draft) => {
        draft.circles = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  setCircles,
  setCirclesDB,
};

export { actionCreators };
