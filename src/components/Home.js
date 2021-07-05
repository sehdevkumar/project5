import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Admin from './Roles/Admin'
import Manager from './Roles/Manager'
import Developer from './Roles/Developer'

function Home() {

  const history = useHistory()
  const imformation = useSelector((state) => state.authReducer);
  const [getRole,setRole] = useState()
  const [getName,setName] = useState()
  const [getToken, setToken] = useState();
  const token = localStorage.getItem("jwt_token");
  useEffect(() => {
    if (!imformation.loggedOn && !token) {
        history.push("/login");
    }
    if(!token){
       history.push("/login");
    }else{
      const user = JSON.parse(token)
      setRole(user.role)
      setName(user.name)
      setToken(user.token)
    }
  }, [imformation, token, history]);


   



    return (
      <>
        {getRole === "admin" ? (
          <Admin name={getName} token={getToken} />
        ) : getRole === "manager" ? (
          <Manager name={getName} token={getToken} />
        ) : (
        <Developer name={getName} token={getToken} />
        )}
      </>
    );
}

export default Home
