import {CREATE_PROJECT_SUCCESS,CREATE_PROJECT_FAILED} from '../Types/types'

const initialState = {
    message:""
}

const projectReducer = (state=initialState,action)=>{

    switch(action.type){

        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                message:action.payload.message
            }
        case CREATE_PROJECT_FAILED:
            return {
                ...state,
                message:action.payload.message
            }

        default:
            return state

    }

}

export default projectReducer