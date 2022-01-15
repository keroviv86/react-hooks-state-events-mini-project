import React from "react";

function CategoryFilter({categories, handleFilter, selectedCategory}) {
  let categoryButtons = categories.map(category => (
    <button value ={category} key = {category} onClick={handleFilter} className = {category === selectedCategory ? "selected" : null} >{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
