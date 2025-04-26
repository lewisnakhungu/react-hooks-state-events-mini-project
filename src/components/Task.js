import React from "react";

function Task({ task = {}, text, category, id, onDelete = () => {} }) {
  // Support both formats: direct props or via task object
  const displayText = text || task.text;
  const displayCategory = category || task.category;
  const taskId = id || task.id;
  
  return (
    <div className="task">
      <div className="label">{displayCategory}</div>
      <div className="text">{displayText}</div>
      <button className="delete" onClick={() => onDelete(taskId)}>
        Delete
      </button>
    </div>
  );
}
export default Task;
