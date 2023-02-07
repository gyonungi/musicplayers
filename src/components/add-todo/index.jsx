import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../../Store/actions/creators/todo';
import { deleteTodo } from "../../Store/actions/creators/todo";


export const AddTodo = () => {
  const [value, setValue] = useState("");
  

  const dispatch = useDispatch();

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };


  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
  } 

  const handledeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    setValue("");
  } 


  
  return (
    <div>
      <input type="text"  value={value} onChange={onInputChange} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add todo
      </button>
      <button className="remove-todo" onClick={handledeleteTodo} >
       Remove todo
      </button>
      
    </div>
  );
};
