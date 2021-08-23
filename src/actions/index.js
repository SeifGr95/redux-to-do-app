export const addTask=(newTask)=>{
    return{type:'addTask',payload:newTask}
}
export const doneTask=(id)=>{
    return {type:'doneTask',payload:{id:id}}
}
export const updateTask=(id,descreption)=>{
    return {type:'updateTask',payload:{id:id,descreption:descreption}}
}
export const deleteTask=(id)=>{
    return {type:'deleteTask',payload:{id:id}}
}