import React,{memo} from "react";
import {useSelector,useDispatch} from 'react-redux'
import deleteAction from "../../Redux/Actions/deleteTaskAction";

function ViewTable({ tasks,token }) {
    
   const dispatch = useDispatch()
   const resposne = useSelector(state=>state.deleteReducer)

  const deleteHandler = (e)=>{
    
    e.preventDefault()
    
    dispatch(deleteAction(e.target.id,token))

  }

  return (
    <>
      {resposne.message}
      {tasks.length === 0 ? (
        <p>Nothing To Delete</p>
      ) : (
        tasks.map((item, index) => {
          return (
            <div
              key={index}
              className="row"
              style={{
                border: "1px solid rgba(0,0,0,0.2)",
                marginTop: "6px",
                padding: "5px",
              }}
            >
              <div className="col-12 col-sm-3">
                Task <p>{item.task}</p>
              </div>
              <div className="col-12 col-sm-3">
                Status<p style={{ color: "green" }}>{item.status}</p>
              </div>
              <div className="col-12 col-sm-3">
                Created date<p>{item.createdDate}</p>
              </div>
              <div className="col-12 col-sm-3">
                <button
                  className="btn btn-danger btn-sm mt-2 ml-2"
                  id={item._id}
                  onClick={deleteHandler}
                >
                  DELETE
                </button>

                <button className="btn btn-warning btn-sm mt-2 ml-2">
                  UPDATE
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default memo(ViewTable);
