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

  const findTaskById = (task,checkedId)=>{
    return task.id.toString() == checkedId;

  }
  const markedComplete = (checkedId) => {
    const taskIndex = tasksList.findIndex((task)=>findTaskById(task,checkedId));
    const completeTask = tasksList[taskIndex]
    updateCompletedTaskList([...completedTasksList, completeTask]);
    tasksList.splice(taskIndex, 1);
    updateTaskList(tasksList);
    
  };


  const handleCheck = (e) => {
    let isChecked = e.target.checked;
    if (isChecked){
      const checkedId = e.target.id;
      markedComplete(checkedId)
    };
    
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
      <NewList list={tasksList} handleCheck={handleCheck} message={"To do list has no task."}/>
      <div>
        <CompletedToDoList list={completedTasksList} onCheck={handleCheck} />
      </div>
    </div>
  );
}
export default ToDoList;
