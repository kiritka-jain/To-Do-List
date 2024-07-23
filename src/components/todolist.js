import { useState } from "react";
import CompletedToDoList from "./completed-to-do-list";
import List from "./list";

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
      <List list={tasksList} handleCheck={handleCheck}/>
      <div>
        <CompletedToDoList />
      </div>
    </div>
  );
}
export default ToDoList;
