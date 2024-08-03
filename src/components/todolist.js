import { useEffect, useState } from "react";
import CompletedToDoList from "./completed-to-do-list";
import NewList from "./newList";
import axios from "axios";

function ToDoList() {
  const [tasksList, updateTaskList] = useState([]);
  const [value, updateValue] = useState("");
  const [completedTasksList, updateCompletedTaskList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Response = await axios.get("/todo/get_all");
        const wholeList = Response.data;
        var uncompletedResponse = [];
        var completedResponse = [];
        for (let task in wholeList) {
          const complete = wholeList[task].completed;
          console.log(typeof complete);
          if (complete === true) {
            completedResponse.push(wholeList[task]);
          } else {
            uncompletedResponse.push(wholeList[task]);
          }
        }
        console.log("uncompleted:", uncompletedResponse);
        console.log("completed", completedResponse);
        updateTaskList(uncompletedResponse);
        updateCompletedTaskList(completedResponse);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, []);

  const addTask = async (value) => {
    if (value) {
      const newTask = {
        title: value,
        completed: false,
      };
      try {
        const response = await axios.post("/todo/add_task", newTask);
        updateTaskList([...tasksList, response.data]);
        updateValue("");
      } catch (error) {
        console.log("error:", error);
      }

      console.log(tasksList);
    }
  };

  const findTaskById = (task, checkedId) => {
    return task.id.toString() == checkedId;
  };

  const markedComplete = async (checkedId) => {
    try {
      const response = await axios.put(`/todo/update_task?id=${checkedId}`, {
        completed: true,
      });
      console.log(response.data);

      const taskIndex = tasksList.findIndex((task) =>
        findTaskById(task, checkedId)
      );
      const completeTask = tasksList[taskIndex];
      completeTask.completed = true;
      updateCompletedTaskList([...completedTasksList, completeTask]);
      tasksList.splice(taskIndex, 1);
      updateTaskList(tasksList);
    } catch (err) {
      console.log(err);
    }
  };

  const markUnComplete = async (uncheckedId) => {
    try {
      const response = await axios.put(`/todo/update_task?id=${uncheckedId}`, {
        completed: false,
      });
      console.log(response.data);
      const taskIndex = completedTasksList.findIndex((task) =>
        findTaskById(task, uncheckedId)
      );
      const unCompleteTask = completedTasksList[taskIndex];
      unCompleteTask.completed = false;
      updateTaskList([...tasksList, unCompleteTask]);
      completedTasksList.splice(taskIndex, 1);
      updateCompletedTaskList(completedTasksList);
    } catch (err) {
      console.log(err);
    }
  };
  const handleMarkComplete = (e) => {
    let isChecked = e.target.checked;
    if (isChecked) {
      const checkedId = e.target.id;
      markedComplete(checkedId);
    }
  };

  const handleMarkUnComplete = (e) => {
    let isChecked = e.target.checked;
    if (!isChecked) {
      const uncheckedId = e.target.id;
      markUnComplete(uncheckedId);
    }
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
      <NewList
        list={tasksList}
        handleCheck={handleMarkComplete}
        message={"To do list has no task."}
      />
      <div>
        <CompletedToDoList
          list={completedTasksList}
          handleCheck={handleMarkUnComplete}
        />
      </div>
    </div>
  );
}
export default ToDoList;
