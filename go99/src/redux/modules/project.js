import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// Actions
const SET_PROJECT = "SET_PROJECT"; // 프로젝트 조회하기
const ADD_PROJECT = "ADD_PROJECT"; // 프로젝트 추가하기
const EDIT_PROJECT = "EDIT_PROJECT"; // 프로젝트 수정하기
const DELETE_PROJECT = "DELETE_PROJECT"; // 프로젝트 수정하기

// Action Creators
const setProject = createAction(SET_PROJECT, (project_list) => ({
  project_list,
}));
const addProject = createAction(ADD_PROJECT, (project_title) => ({
  project_title,
}));
const editProject = createAction(EDIT_PROJECT, (project_id, project_title) => ({
  project_id,
  project_title,
}));
const deleteProject = createAction(DELETE_PROJECT, (project_id) => ({
  project_id,
}));

// initialState
const initialState = {
  list: [],
};

// Reducer
export default handleActions(
  {
    [SET_PROJECT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.project_list);
      }),
    [ADD_PROJECT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.project);
      }),
    [EDIT_PROJECT]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (p) => p.id === action.payload.project_id
        );
        draft.list[idx] = { ...draft.list[idx], ...action.payload.project };
      }),
    [DELETE_PROJECT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.project);
      }),
  },
  initialState
);

const actionCreators = {
  setProject,
  addProject,
  editProject,
  deleteProject,
};

export { actionCreators };
