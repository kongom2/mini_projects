import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../api/axios";

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
const deleteProject = createAction(DELETE_PROJECT, (projects_id) => ({
  projects_id,
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
const getProjectDB = () => {
  return function (dispatch, getState, { history }) {
    console.log(apis.getProjects);
    axios
      .get("https://run.mocky.io/v3/db4f9609-1596-47ca-a4f8-3454ac265db0")
      .then((res) => {
        let project_list = res.data.project;
        dispatch(getProject(project_list));
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};
const addProjectDB = (projects_name) => {
  return function (dispatch, getState, { history }) {
    // apis.addProjects
    axios
      .post("https://run.mocky.io/v3/db4f9609-1596-47ca-a4f8-3454ac265db0", {
        projects_name,
      })
      .then((res) => {
        console.log(res.data.project);
        console.log(projects_name);
        dispatch(addProject(projects_name));
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};
const editProjectDB = (projects_name, projects_id) => {
  return function (dispatch, getState, { history }) {
    // apis.editProjects
    axios
      .get("https://run.mocky.io/v3/db4f9609-1596-47ca-a4f8-3454ac265db0")
      .then((res) => {
        dispatch(editProject(projects_name, projects_id));
        window.alert("프로젝트이름 수정 완료!");
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};
const deleteProjectDB = (projects_id) => {
  return function (dispatch, getState, { history }) {
    // apis.deleteProjects
    axios
      .delete("https://run.mocky.io/v3/db4f9609-1596-47ca-a4f8-3454ac265db0")
      .then((res) => {
        console.log(res.data.project);
        window.alert("삭제 했습니다!");
        dispatch(deleteProject(projects_id));
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
        // .push(...action.payload.project_list);
      }),
    [ADD_PROJECT]: (state, action) =>
      produce(state, (draft) => {
        // draft.list.push(action.payload.projects_name);
        draft.list.push(action.payload.projects_name);
      }),
    [EDIT_PROJECT]: (state, action) =>
      produce(state, (draft) => {
        draft.editList = action.payload.projects_name;
      }),
    [DELETE_PROJECT]: (state, action) =>
      produce(state, (draft) => {
        const del_list = draft.list.filter((p) => {
          if (p.projects_id !== action.payload.projects_id) {
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
  getProjectDB,
  addProjectDB,
  editProjectDB,
  deleteProjectDB,
  // addProjectFB,
};

export { actionCreators };
