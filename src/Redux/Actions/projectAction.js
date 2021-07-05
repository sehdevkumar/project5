import { CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILED } from "../Types/types";

const createProject = (name,token) => async (dispatch) => {
  if (!name) {
    dispatch({ type:CREATE_PROJECT_FAILED,payload:{message:"Please Fill Input!"} });
    return;
  }
  try {
      
         const response = await fetch(
           "http://localhost:5000/api/createproject/",
           {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
               "Authorization": "Bearer " + token,
             },
             body: JSON.stringify({ name }),
           }
         );

          if(response.status===201){
             const data = await response.json()
             dispatch({
               type: CREATE_PROJECT_SUCCESS,
               payload: { message: data.message},
             });
          }else{
                const data = await response.json();
                dispatch({
                  type: CREATE_PROJECT_FAILED,
                  payload: { message: data.error },
                });
          }
          


  } catch (error) {
        dispatch({
          type: CREATE_PROJECT_FAILED,
          payload: { message: "Internal Error" },
        });
  }
};

export {createProject}