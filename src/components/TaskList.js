import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task 
          key={task.id || `task-${index}`} 
          task={task} 
          onDelete={onDeleteTask} 
        />
      ))}
    </div>
  );
}

export default TaskList;