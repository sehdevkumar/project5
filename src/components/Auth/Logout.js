import React from 'react'
import {useHistory} from 'react-router-dom'

function Logout() {
    
    const history = useHistory()
  
    localStorage.removeItem('jwt_token')
    history.push('/login')
    window.location.href="/login"
    

    return (
        <>
            
        </>
    )
}

export default Logout
