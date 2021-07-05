import React, { useState } from "react";
import About from "../Admin/About";
import TaskFrom from "../Task/TaskFrom";
import TaskView from "../Task/TaskView";

function Manager(props) {

  const [getAboutFlag, setAboutFlag] = useState(true);
  const [getCreateFlag, setCreateFlag] = useState(false);
  const [getViewFlag,setViewFlag] = useState(false)

  const { name, token } = props;

  return (
    <>
      <br />
      <center>
        <h2>Welcome to Manager</h2>
      </center>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4">
            <nav className="nav flex-column">
              <button
                onClick={() => {
                  setAboutFlag(true)
                  setCreateFlag(false)
                  setViewFlag(false);
                }}
                className=" btn btn-sm btn-outline-primary nav-link active"
              >
                About
              </button>
              <button
                onClick={() => {
                  setAboutFlag(false);
                  setCreateFlag(true);
                  setViewFlag(false);
                }}
                className=" btn btn-sm btn-outline-primary nav-link active mt-2"
              >
                Create Task
              </button>
              <button
                onClick={() => {
                 setAboutFlag(false);
                 setCreateFlag(false);
                 setViewFlag(true);
                }}
                className=" btn btn-sm btn-outline-primary nav-link active mt-2"
              >
                 View Tasks
              </button>
            </nav>
          </div>
          <div className="col-12 col-md-6 mt-4">
            {getAboutFlag && <About name={name} />}
            {getCreateFlag && <TaskFrom token={token} />}
            {getViewFlag && <TaskView token={token}/>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Manager;
