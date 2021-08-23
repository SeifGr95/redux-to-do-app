
import { useSelector, useDispatch } from "react-redux";
import { addTask,doneTask,updateTask,deleteTask } from "../actions/index";
import React, { useState } from "react";

function Task(props){
    const [descreptionUpdated,setDescreption]=useState('');
    console.log(props.task)
const [show,setShow]=useState(false);
    const dispatch= useDispatch();
    function check(id){
        dispatch(doneTask(id));
    }
    function update(){
        setShow(true);

    }
    function deleteThisTask(id){
        dispatch(deleteTask(id));
       

    }
    function onSubmit(event){
        event.preventDefault();
        dispatch(updateTask(props.task.id,descreptionUpdated));
         setDescreption(''); 
        setShow(false);

    }
  
    
   
    return (<div className="card  done notDone" style={{width:'18rem'}}>
    <div className="card-body">
      <h3 className="card-title">Task</h3>
      <h4 className="card-subtitle mb-2 text-muted  "  style={{marginBottom:'20px'}}>{ props.task.descreption} </h4>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
      <button type="button" className="btn btn-success" style={{marginBottom:'20px'}} onClick={()=>check(props.task.id)} >Done</button>
      <button type="button" class="btn btn-danger" style={{marginBottom:'20px'}} onClick={ ()=> deleteThisTask(props.task.id)}>Delete Task</button> 
      <button type="button" className="btn btn-primary" onClick={update}>Update Task</button>
       {props.task.done ? <h4>This task is done</h4> :<h4>This task is not done</h4>} 
      </div>
      { show ?<form onSubmit={onSubmit} >
      <div class="form-group">
        <label for="task">Task</label>
        <input
          type="text"
          class="form-control"
          id="task"
          value={descreptionUpdated} 
          placeholder=" UpdateTask"
          onChange={(event)=>setDescreption(event.target.value)}
          style={{marginBottom:'20px'}}
          
        />
        </div>
      
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>:null} 
    
     
    </div>
  </div>

    )
}
export default Task;