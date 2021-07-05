import React,{useState} from 'react'
import About from '../Admin/About';
import ProjectForm from '../Admin/ProjectForm';
function Admin(props) {
   
    const [getFlag,setFlag] = useState(false)

    const {name,token} = props

    return (
      <>
        <br />
        <center>
          <h2>Welcome to Admin</h2>
        </center>
        <div className="container mt-4">
          <div className="row">
            <div className="col-12 col-md-4">
              <nav className="nav flex-column">
                <button
                  onClick={() => {
                    setFlag(false);
                  }}
                  className=" btn btn-sm btn-outline-primary nav-link active"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    setFlag(true);
                  }}
                  className=" btn btn-sm btn-outline-primary nav-link active mt-2"
                >
                  Create Project
                </button>
              </nav>
            </div>
            <div className="col-12 col-md-6">
                {!getFlag && <About name={name}/>}
                {getFlag && <ProjectForm token={token}/>}
            </div>
          </div>
        </div>
      </>
    );
}

export default Admin
