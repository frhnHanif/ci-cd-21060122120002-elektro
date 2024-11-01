import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const ToDoItems = ({text, id, isComplete, deleteToDo, toggle}) => {
  return (
    <div onClick={()=>{toggle(id)}} className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img src={isComplete ? tick : not_tick} className="w-7"></img>

        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 
          ${isComplete ? 'line-through' : ''}`}>
          {text}</p>
      </div>

      <img onClick={()=>{deleteToDo(id)}} className="w-4 cursor-pointer" src={delete_icon}></img>
    </div>
  );
};

export default ToDoItems;
