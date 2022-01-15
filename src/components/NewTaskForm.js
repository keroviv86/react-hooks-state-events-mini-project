import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [textState, textStateSetter] = useState('')
  const [categoryState, categoryStateSetter] = useState("Code")
  
  let categoryDropMenu = categories
      .filter(category=>(category!== "All"))
      .map(category => (<option value ={category} key= {category}>{category}</option>))
  

  function handleTextChange(e){
    textStateSetter(e.target.value)
  }

  function handleCategoryChange(e){
    categoryStateSetter(e.target.value)
  }

  function handleOnTaskFormSubmit(event){
    event.preventDefault()
    onTaskFormSubmit({
      text: textState,
      category: categoryState
    })

  }

  return (
    <form className="new-task-form" onSubmit= {handleOnTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {categoryDropMenu}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
