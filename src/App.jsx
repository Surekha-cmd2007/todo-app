import { useState } from "react";
import './index.css';
import { Displaytodo } from "./app1";
export function TodoApp(){

  let [task,settask]=useState("")
  let [todos,settodos]=useState([])
  
  const submitHandler=(e)=>{
    e.preventDefault();
    if (task.trim()===""){
        return;
    }else{
  
  let newtodos=[...todos,task];
  settodos(newtodos);
  settask(""); }}

  let deleteHandler=(indexvalue)=>{
    let newtodos=todos.filter((todo,index)=>index !== indexvalue);
    settodos(newtodos);
  }

  return(

    <>
     <center>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Todo Management Application</h2>
          <form onSubmit={submitHandler}>
            <input type="text" value={task} onChange={(e)=>{settask(e.target.value);}}/>&nbsp; &nbsp;
            <input type="submit" className="add-btn" value="add" name="add"/>
          </form>
          <Displaytodo todolist={todos} deleteHandler={deleteHandler}/>
        </div>

      </div>
     </center>
    
    </>
  )
}