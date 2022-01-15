import React from "react";
import Task from "./Task"


function TaskList({tasks, handleDelete}) {
  const taskItem = tasks.map(task => (
      <Task 
            key= {task.text}
            text={task.text}
            category={task.category}
            handleDelete={handleDelete}
          />
    ))
  return (
    <div className="tasks">
      {taskItem}
      
      {/* {tasks.map(task=> (
        <Task
          key= {task.text}
          text={task.text}
          category={task.category}
        />
      ))} */}
    </div>
  );
}

export default TaskList;


