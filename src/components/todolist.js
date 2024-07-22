import { useState } from "react";
import Row from "./row";

function ToDoList() {
  const [tasksList, updateTaskList] = useState([]);
  const [value, updateValue] = useState("");

  const addTask = (value) => {
    if (value) {
      const newTask = {
        id: Date.now(),
        text: value,
        completed: false,
      };

      updateTaskList([...tasksList, newTask]);
      updateValue("");
      console.log(tasksList);
    }
  };

  const handleCheck = () => {
    console.log("box checked");
  };
  const rowItems = tasksList.map((task) => (
    <div className="row">
        <Row
      key={task.id}
      value={task.text}
      onClick={handleCheck}
    />
    </div>
    
  ));
  return (
    <div className="toDoList">
        <div className="task">
            <input
            type="text"
            value={value}
            onChange={(e) => updateValue(e.target.value)}
            placeholder="Enter task"
        />
            <button
                type="submit"
                onClick={() => {
                addTask(value);
                }}
            >
                Add Task
            </button>
        </div>
      
      <div className="taskRow">
        {tasksList.length === 0 ? "To do list has no task." : rowItems}
      </div>
      
    </div>
  );
}
export default ToDoList;
