import React, { useState } from 'react'

const Todos = () => {
    let [value , setValue] = useState("")
    const [todos , setTodos] = useState([]);
  return (
    <div>Todo

        <input value ={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() =>{setTodos([...todos,{value: value}]);setValue("")}}>
            Add
        </button>
       
       {todos.map((todo)=>
         (<div>{todo.value}</div>))}
    </div> 
  );
};

export default Todos