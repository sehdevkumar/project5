import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import taskAction from '../../Redux/Actions/taskAction'

function TaskFrom(props) {
      
    const {token} = props
    const [getProjects,setProjects]  = useState([])
    const [getDevelopers, setDevelopers] = useState([]);
    const [getTaskDetails, setTaskDetails] = useState({
      task: "",
      projectID: "select",
      assignTO: "select",
      token:token
    });

    const dispatch = useDispatch()
    const state = useSelector(state => state.taskReducer)

    useEffect(()=>{

       async function apiProject() {
         const api = await fetch("http://localhost:5000/api/projects/", {
           method: "GET",
           headers: {
             "Content-Type": "application/json",
             "Authorization": "Bearer " + token,
           },
         });
         const data = await api.json()
       
         setProjects(data.projects)
       };
     apiProject()
    },[token])

    useEffect(() => {
      
      async function apiProject() {
        const api = await fetch("http://localhost:5000/api/developers/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
        const data = await api.json();

        setDevelopers(data.developers);
      }
      apiProject();
    }, [token]);

    const inputHandler = (e)=>{

        setTaskDetails({
          ...getTaskDetails,
          [e.target.name]:e.target.value
        })

    }
    
    // Submit Button
    const submitTask = (e)=>{

      e.preventDefault()
      const {task,projectID,assignTO,token} = getTaskDetails
      dispatch(taskAction(task, projectID, assignTO, token))

    }

   


    return (
      <>
        <center>
          <h4>Create Task</h4>
        </center>

        <form
          className="mt-4"
          style={{
            border: "1px solid rgba(0,0,0,0.2)",
            boxSizing: "border-box",
            padding: "12px",
          }}
        > 
          <p style={{color:'red'}}>{state.message}</p>
          
          <label>Task</label>
          <input
            type="text"
            name="task"
            value={getTaskDetails.task}
            className="form-control"
            placeholder="Enter Task"
            onChange={inputHandler}
          />

          <label>Project</label>

          <select
            name="projectID"
            className="form-control"
            style={{ overflow: "hidden" }}
            value={getTaskDetails.projectID}
            onChange={inputHandler}
          >
            <option value="select">select</option>
            {getProjects.map((item, index) => {
              return (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>

          <label>Assign To</label>

          <select
            name="assignTO"
            className="form-control"
            value={getTaskDetails.assignTO}
            onChange={inputHandler}
          >
            <option value="select">select</option>
            {getDevelopers.map((item, index) => {
              return (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>

          <button onClick={submitTask} type="submit" className="btn btn-warning form-control mt-3">
            Create
          </button>
        </form>
      </>
    );
}

export default TaskFrom
