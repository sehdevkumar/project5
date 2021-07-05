import React,{useState} from 'react'
import { createProject } from '../../Redux/Actions/projectAction'
import {useDispatch,useSelector} from 'react-redux'

function ProjectForm(props) {
    
    const [getName,setName] = useState("")
    const dispatch = useDispatch()
    const response = useSelector((state) => state.projectReducer);
    
    const createHandler = (e)=>{
        e.preventDefault()
        dispatch(createProject(getName,props.token))
    }

    return (
        <>
           <center><h4>Create Project</h4></center> 
           <p style={{color:'red'}}>{response.message}</p>
           <form className='mt-4' style={{border:'1px solid rgba(0,0,0,0.2)',boxSizing:'border-box',padding:'12px'}}>
                <label>Project Name</label>
                <input type="text"
                onChange={(e)=>{setName(e.target.value)}}
                value={getName}
                name='name' className='form-control' placeholder='Enter Project Name' />
                <button onClick={createHandler} type='submit' className='btn btn-warning form-control mt-3'>Create</button>
           </form>  
        </>
    )
}

export default ProjectForm
