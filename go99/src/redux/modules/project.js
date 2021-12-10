import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../api/axios";
import { firestore } from "../../shared/firebase";

// api이후 삭제
import axios from "axios";

// Actions
const GET_PROJECT = "GET_PROJECT"; // 프로젝트 조회하기
const ADD_PROJECT = "ADD_PROJECT"; // 프로젝트 추가하기
const EDIT_PROJECT = "EDIT_PROJECT"; // 프로젝트 수정하기
const DELETE_PROJECT = "DELETE_PROJECT"; // 프로젝트 수정하기

// Action Creators
const getProject = createAction(GET_PROJECT, (project_list) => ({
  project_list,
}));
const addProject = createAction(ADD_PROJECT, (projects_name) => ({
  projects_name,
}));
const editProject = createAction(
  EDIT_PROJECT,
  (projects_id, projects_name) => ({
    projects_id,
    projects_name,
  })
);
const deleteProject = createAction(DELETE_PROJECT, (list, userId) => ({
  list,
  userId,
}));

// initialState
const initialState = {
  list: [],
  editList: [],
};

const initialStateProject = {
  // projects_name: "",
  // projects_id: "",
  // date: "",
};

// DB
const getProjectDB = (id) => {
  return function (dispatch, getState, { history }) {
    // apis.getProjects
    const user = {
      userId: id,
    };
    apis
      .getProjects(id)
      .then((res) => {
        let project_list = res.data.projects;
        dispatch(getProject(project_list));
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};

const addProjectDB = (title) => {
  return function (dispatch, getState, { history }) {
    apis
      .addProjects(title)
      .then((res) => {
        console.log(res.data);
        const list = res.data;
        dispatch(addProject(list));
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};

const editProjectDB = (projects_id, userId, project_title) => {
  return function (dispatch, getState, { history }) {
    console.log(projects_id, userId, project_title);

    const data = {
      userId: userId,
      project_title: project_title,
    };
    apis
      .editProjects(projects_id, data)
      .then((res) => {
        const list = res.data;
        dispatch(editProject(list));
        window.alert("프로젝트이름 수정 완료!");
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};

const deleteProjectDB = (projects_id, userId) => {
  return function (dispatch, getState, { history }) {
    console.log(projects_id, userId); // 일단 숫자형 데이터

    apis
      .deleteProjects(projects_id, userId)
      .then((res) => {
        const list = res.data;
        console.log(list);
        window.alert("삭제 했습니다!");
        dispatch(deleteProject(list, userId));
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
        draft.list = action.payload.project_list;
      }),
    [ADD_PROJECT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.projects_name;
      }),
    [EDIT_PROJECT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.projects_id;
      }),
    [DELETE_PROJECT]: (state, action) =>
      produce(state, (draft) => {
        console.log("딜리트 리듀서 실행");
        const list = action.payload.list;
        const id = action.payload.userId;
        const deleteList = list.filter((x) => x.userId === id);
        draft.list = deleteList;
      }),
  },
  initialState
);

const actionCreators = {
  getProject,
  addProject,
  editProject,
  deleteProject,
  getProjectDB,
  addProjectDB,
  editProjectDB,
  deleteProjectDB,
  // addProjectFB,
};

export { actionCreators };
