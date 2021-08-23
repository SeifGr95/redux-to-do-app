import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { addTask } from "../actions/index";
import Task from './Task'
function ListTask() {
    const dispatch= useDispatch();
   
    var tasks=[];
    tasks=useSelector(state=>state.add)


    
  
  return (
    <div classNme='container' style={{display:'flex',margin:'auto',width:'50%',justifyContent:'space-around',flexDirection:"row",
    alignItems:'center',marginTop:'50px',flexWrap:'wrap',marginBottom:'50px'}}>
      { tasks.length >0  ? tasks.map((element)=><Task task={element} style={{marginTop:'50px',marginBottom:'50px'}} />):'no tasks to show '}
    </div>
  );
}
export default ListTask;
