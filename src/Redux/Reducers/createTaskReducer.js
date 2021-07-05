import { CREATE_TASK_SUCCESS, CREATE_TASK_FAILED } from "../Types/types";

const initialState = {
  message: "",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case CREATE_TASK_FAILED:
      return {
        ...state,
        message: action.payload.message,
      };

    default:
      return state;
  }
};

export default taskReducer;
