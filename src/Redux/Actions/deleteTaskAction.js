import { TASK_DELETE_FAILED, TASK_DELETE_SUCCESS } from "../Types/types"

const deleteAction = (taskid,token)=>async (dispatch)=>{

     try {
         

        const response = await fetch(
          `http://localhost:5000/api/task/delete/${taskid}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            }
          }
        );
        const data = await response.json()
        console.log(data)
        
        if(response.status===200){
           dispatch({
             type: TASK_DELETE_SUCCESS,
             payload: {
               message: data.message,
             },
             deleted:true
           });
        }else{
           dispatch({
             type: TASK_DELETE_FAILED,
             payload: {
               message: data.error,
             },
             deleted:false
           });
        }

     } catch (error) {
         dispatch({type:TASK_DELETE_FAILED,payload:{
             message:error.message
         }})
     }


}

export default deleteAction