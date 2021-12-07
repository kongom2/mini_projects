import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import project from "./modules/project";

const middlewares = [thunk];
const rootReducer = combineReducers({ project });
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
