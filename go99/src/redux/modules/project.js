// Actions
const LOAD = "project/LOAD"; // 프로젝트 불러오기

// Action Creators
export function loadProject(project) {
  return { type: LOAD, project };
}

const initialState = {
  project_list: [
    { project_id: "프로젝트1", project_title: "제목1" },
    { project_id: "프로젝트2", project_title: "제목2" },
    { project_id: "프로젝트3", project_title: "제목3" },
    { project_id: "프로젝트4", project_title: "제목4" },
    { project_id: "프로젝트5", project_title: "제목5" },
  ],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "project/LOAD": {
      return { ...state, project: action.project };
    }
    default:
      return state;
  }
}
