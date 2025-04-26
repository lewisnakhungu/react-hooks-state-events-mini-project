import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { CATEGORIES, TASKS } from "../data";

// Add IDs to tasks and ensure they're unique
const tasksData = TASKS.map((task, index) => {
  // Generate a deterministic ID based on index if not present
  const taskId = task.id || (Date.now() + index);
  return {
    id: taskId,
    text: task.text,
    category: task.category
  };
});

// Use categories from data file
const categories = CATEGORIES;
function App() {
  const [tasks, setTasks] = useState(tasksData);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handler to add a new task
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Handler to remove a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Filter tasks based on category
  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h1>Task List</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <NewTaskForm
        categories={categories.filter((category) => category !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;