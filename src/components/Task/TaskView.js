import React,{useEffect,useState} from 'react'
import ViewTable from './ViewTable';
import {useSelector} from 'react-redux'

function TaskView(props) {
   
    const [getTasks,setTasks] = useState([])
    const resposne = useSelector((state) => state.deleteReducer);
   
    useEffect(()=>{

      
        async function task(){

            const api = await fetch("http://localhost:5000/api/tasks/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + props.token,
              },
            });
            const data = await api.json();
            setTasks(data.tasks)

        }
        return task()
        
    },[props.token,resposne])


    return (
      <>
        <ViewTable token={props.token} tasks={getTasks} />
      </>
    );
}

export default TaskView
