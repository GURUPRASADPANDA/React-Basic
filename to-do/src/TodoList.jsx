import { useState } from 'react';
export default function TodoList(){

    let[todos,setTodos] = useState(["Sample Task"]);
    let[newTodo,setnewTodo] = useState("");

    let addNewTask = () => {
       setTodos([...todos,newTodo])
    };

    let updateTodoValue= (event)=>{
      setnewTodo(event.target.value);
    };  
        
    return (
        <div>
           <input type="text" placeholder="Add tasks here" onChange={updateTodoValue}/>
           <br/><br/>
           <button onClick={addNewTask}>Add Task</button>
           <br/><br/><br/><br/>

           <hr></hr>
           <h3>Tasks to-do</h3>
           <ul>
            {
                todos.map((todo)=>(
                 <li>{todo}</li>
                ))
            }
           </ul>
        
        </div>
        
    );
}