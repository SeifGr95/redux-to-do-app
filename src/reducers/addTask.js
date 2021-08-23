import { bindActionCreators } from "redux"

const initialState=[{id:0,descreption:'firstTask',done:false}];
const addTask=(state=initialState,action)=>{
switch(action.type){
    case 'addTask':
        return [...state,action.payload]
        default:
            return state;
        case 'doneTask':
            return state.map((element)=>{
                if(element.id===action.payload.id){
                    /* return {...element,done:true} */
                    if(element.done==false){
                        return {...element,done:true} 
                    }
                    else if (element.done==true){
                        return {...element,done:false} 
                    }
                }
                else{
                    return element
                }
            })
            case 'updateTask':
             return state.map((element)=>{
                 if(element.id===action.payload.id){
                     return {...element,descreption:action.payload.descreption}
                 }
                 else{
                     return element;
                 }
             }) 
              case 'deleteTask'  :
            return  state.filter((element)=>element.id!=action.payload.id)
               

}
}
export default addTask ;
