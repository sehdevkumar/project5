import {REGISTER_SUCCESS,REGISTER_FAILED} from '../Types/types'

const initialState = {
    user:{},
    error:"",
    loggedOn:false
}

const authReducer = (state=initialState,action)=>{

    switch(action.type){

        case REGISTER_SUCCESS:
            return {
                ...state,
                user:action.payload.user,
                loggedOn:true
            }
        case REGISTER_FAILED:
            return {
                ...state,
                error:action.payload.error
            }

        default:
            return state


    }

}

export default authReducer