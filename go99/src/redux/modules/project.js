import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../api/axios";

// Actions
const GET_PROJECT = "GET_PROJECT"; // 프로젝트 조회하기
const ADD_PROJECT = "ADD_PROJECT"; // 프로젝트 추가하기
const EDIT_PROJECT = "EDIT_PROJECT"; // 프로젝트 수정하기
const DELETE_PROJECT = "DELETE_PROJECT"; // 프로젝트 수정하기

// Action Creators
const getProject = createAction(GET_PROJECT, (project_list) => ({
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

// DB
const loadProjectDB = () => {
  return function (dispatch, getState, { history }) {
    apis.getProjects
      .then((res) => {
        let project_list = res.data;
        dispatch(getProject(project_list));
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};
const addProjectDB = () => {
  return function (dispatch, getState, { history }) {
    apis.addProjects
      .then((res) => {
        let project_title = res.data.project_id;
        dispatch(addProject(project_title));
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};
const editProjectDB = () => {
  return function (dispatch, getState, { history }) {
    apis.editProjects
      .then((res) => {
        dispatch(editProject());
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};
const deleteProjectDB = () => {
  return function (dispatch, getState, { history }) {
    apis.deleteProjects
      .then((res) => {
        dispatch(deleteProject());
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};

// Reducer
export default handleActions(
  {
    [GET_PROJECT]: (state, action) =>
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
        const del_list = draft.list.filter((p) => {
          if (p.project_Id !== action.payload.project_id) {
            return p;
          }
        });
        return { list: del_list };
      }),
  },
  initialState
);

const actionCreators = {
  getProject,
  addProject,
  editProject,
  deleteProject,
  addProjectDB,
  loadProjectDB,
  editProjectDB,
  deleteProjectDB,
};

export { actionCreators };
