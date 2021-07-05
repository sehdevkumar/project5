import { TASK_DELETE_FAILED, TASK_DELETE_SUCCESS } from "../Types/types"


const initialState = {
    deleted:false,
    message:""
}

const deleteReducer = (state=initialState,action)=>{

    switch(action.type){

        case TASK_DELETE_SUCCESS:
            return {
                ...state,
                deleted:true,
                message:action.payload.message
            }
        case TASK_DELETE_FAILED:
            return {
              ...state,
              deleted: false,
              message: action.payload.message,
            }
        
            default:
                return state

    }

}
export default deleteReducer