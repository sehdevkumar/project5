import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from './createProjectReducer'
import taskReducer from './createTaskReducer'
import deleteReducer from "./deleteTaskReducer";

const rootReducer = combineReducers({
  authReducer,
  projectReducer,
  taskReducer,
  deleteReducer
});

export default rootReducer