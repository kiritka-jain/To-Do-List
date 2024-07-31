import { useEffect, useState } from "react";
import CompletedToDoList from "./completed-to-do-list";
import NewList from "./newList";
import axios from "axios";

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
    const completeTask = tasksList[taskIndex];
    completeTask.completed =true;
    updateCompletedTaskList([...completedTasksList, completeTask]);
    tasksList.splice(taskIndex, 1);
    updateTaskList(tasksList);
    
  };

  const markUnComplete = (uncheckedId)=>{
    const taskIndex = completedTasksList.findIndex((task)=>findTaskById(task,uncheckedId));
    const unCompleteTask = completedTasksList[taskIndex];  
    unCompleteTask.completed =false;
    updateTaskList([...tasksList,unCompleteTask]);
    completedTasksList.splice(taskIndex,1);
    updateCompletedTaskList(completedTasksList);

  }


  const handleMarkComplete= (e) => {
    let isChecked = e.target.checked;
    if (isChecked){
      const checkedId = e.target.id;
      markedComplete(checkedId)
    };
  };

  const handleMarkUnComplete= (e) => {
    let isChecked = e.target.checked;
    if (!isChecked){
      const uncheckedId = e.target.id;
      markUnComplete(uncheckedId)
    };
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/todo/getall');
        updateTaskList(response.data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, []);

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
      <NewList list={tasksList} handleCheck={handleMarkComplete} message={"To do list has no task."}/>
      <div>
        <CompletedToDoList list={completedTasksList} handleCheck={handleMarkUnComplete} />
      </div>
    </div>
  );
}
export default ToDoList;
