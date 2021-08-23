import "bootstrap/dist/css/bootstrap.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { addTask } from "../actions/index";
function AddTask() {
  const [task, setTask] = useState({ id: "", descreption: "", done: false });
  const dispatch = useDispatch();
  function handleChange(event) {
    const descreption = event.target.value;
    const id = Math.floor(Math.random() * 10000) + 1;
    setTask({ ...task, id, descreption });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(task));
    setTask({descreption:''});
    
  };
  return (  <form onSubmit={onSubmit} style={{margin:'auto',width:'500px',marginTop:'100px'}}>
      <div class="form-group">
        <label for="task" >Task</label>
        <input 
        style={{marginBottom:'20px'}}
          type="text"
          class="form-control"
          id="task"
          value={task.descreption}
          placeholder=" AddTask"
          onChange={handleChange}
        />
        </div>
      
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default AddTask;
