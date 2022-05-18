import React, { useState } from 'react';
import styles from './todo.module.css';
import TodoItem from './TodoItem';

const Todo = () => {
    let [value , setValue] = useState("")
    const [todos , setTodos] = useState([]);

    const onDelete =()=>{
        let newTodos = todos.filter((todo)=>todo.id !== id);

        setTodos(newTodos);
    };

  return (
    <div>Todo

        <input value ={value}
         onChange={(e) => {
             setValue(e.target.value)}} />

        <button 
        onClick={() =>{
            setTodos([...todos,{value: value}]);
            setValue("");
            }}>
            Add
        </button>

    <div className={styles.todoList}>
        {todos.map((todo)=>(
          <TodoItem key={todo.id} todo={todo} 
          onDelete={onDelete}/>
    ))}
    </div>
    </div>
        
        
  );
};

export default Todo;