import { useState } from "react";
import CompletedToDoList from "./completed-to-do-list";
import NewList from "./newList";

function ToDoList() {
  const [tasksList, updateTaskList] = useState([]);
  const [value, updateValue] = useState("");
  const [completedTasksList, updateCompletedTaskList] = useState([]);

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
  const removeTask = (id) => {};

  const handleCheck = () => {
    console.log("box checked");
  };

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
      <NewList list={tasksList} handleCheck={handleCheck}/>
      <div>
        <CompletedToDoList list={tasksList} onCheck={handleCheck}/>
      </div>
    </div>
  );
}
export default ToDoList;
