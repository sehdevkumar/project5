import {CREATE_TASK_SUCCESS,CREATE_TASK_FAILED} from '../Types/types'

const taskAction = ( task,projectID,assignTO,token)=> async (dispatch)=>{

    if(!task || projectID==="select" || assignTO==="select"){
        dispatch({type:CREATE_TASK_FAILED,payload:{message:"Please Choose the Inputs!"}})
        return;
    }

    try {
        
         const api = await fetch("http://localhost:5000/api/createtask/", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             Authorization: "Bearer " + token,
           },
           body:JSON.stringify({
               task,projectID,assignTO,token
           })
         });

         if(api.status===200){
             const data = await api.json()
              dispatch({
                type: CREATE_TASK_SUCCESS,
                payload: { message: data.message},
              });
         }else{
              const data = await api.json();
              dispatch({
                type: CREATE_TASK_FAILED,
                payload: { message: data.error },
              });
         }



    } catch (error) {
         dispatch({
           type: CREATE_TASK_FAILED,
           payload: { message: "Somethings went wrong..." },
         });
         return;
    }




}

export default taskAction