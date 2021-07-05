import {REGISTER_FAILED, REGISTER_SUCCESS} from '../Types/types'
import validator from 'validator'


const registerAction = (name,email,password,role)=>async (dispatch)=>{
     
        if(!name || !email || role==='select' || !password){
              dispatch({
                type: REGISTER_FAILED,
                payload: { error: "Please Fill Details!" },
              });
              return;
        }
        if(!validator.isEmail(email)){
             dispatch({
               type: REGISTER_FAILED,
               payload: { error: "Invalid Email Type!" },
             });
             return;
        }if (password.length<6) {
          dispatch({
            type: REGISTER_FAILED,
            payload: { error: "Password Length should 6 or more than 6 Characters !" },
          });
          return;
        }else{

           

            try {
                
                 const response =  await fetch("http://localhost:5000/api/register", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ name, email, password, role }),
                });

                if(response.status===201){
                   const data = await response.json()
                   dispatch({
                     type: REGISTER_SUCCESS,
                     payload: {
                       user: data.user,
                       loggedOn:true
                     },
                   });
                    localStorage.setItem("jwt_token", JSON.stringify(data.user));
                }else{
                      const data = await response.json();
                     dispatch({
                       type: REGISTER_FAILED,
                       payload: {
                         error: data.error,
                       },
                     });
                }



            } catch (error) {
                 dispatch({
                   type: REGISTER_FAILED,
                   payload: {
                     error:
                       error.message,
                   },
                 });
            }


        }
      

}

const loginAction = (email, password, role) => async (dispatch) => {
  if (!email || role === "select" || !password) {
    dispatch({
      type: REGISTER_FAILED,
      payload: { error: "Please Fill Details!" },
    });
    return;
  }
  if (!validator.isEmail(email)) {
    dispatch({
      type: REGISTER_FAILED,
      payload: { error: "Invalid Email Type!" },
    });
    return;
  }
  if (password.length < 6) {
    dispatch({
      type: REGISTER_FAILED,
      payload: {
        error: "Password Length should 6 or more than 6 Characters !",
      },
    });
    return;
  } else {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password, role }),
      });

      if (response.status === 201) {
        const data = await response.json();
        dispatch({
          type: REGISTER_SUCCESS,
          payload: {
            user: data.user,
            loggedOn: true,
          },
        });
        localStorage.setItem('jwt_token',JSON.stringify(data.user))
      } else {
        const data = await response.json();
        dispatch({
          type: REGISTER_FAILED,
          payload: {
            error: data.error,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: REGISTER_FAILED,
        payload: {
          error: error.message,
        },
      });
    }
  }
};


export {registerAction,loginAction}