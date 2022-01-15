import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS })

function App() {
  const [taskList, taskListSetter] = useState(TASKS)
  const [selectedCategory, selectedCategorySetter] = useState("All")
  
  function onTaskFormSubmit(newTaskObj) {
    taskListSetter ([...taskList, newTaskObj])

  }

  function handleDelete(text){
    let newTaskList = taskList.filter(task => {
      return task.text !== text
     })
     taskListSetter(newTaskList)
  }

  function handleFilter(e){
    selectedCategorySetter(e.target.value)
  }

  let itemsToDisplay = taskList.filter(task=> {
    // return selectedCategory === "All" ? true : task.category === selectedCategory
    if(selectedCategory === "All") {
      return true
    } else {
      return (task.category === selectedCategory)
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={handleFilter} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={itemsToDisplay} handleDelete= {handleDelete}/>
    </div>
  );
}

export default App;

