const db = require("../models/index.js");
const { ServerError, ValidationError } = require("../errors/custom.errors.js");
const { send } = require("process");
const { query } = require("express");

class Todolist {
  static async addTask(taskData) {
    console.log("taskData", taskData);
    try {
      const newTask = await db.Todo.create(taskData);
      return newTask;
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        throw new ValidationError("Invalid task data");
      }
      console.log("err", error);
      throw new ServerError("Error adding task");
    }
  }
  static async getAll(res, req) {
    const status = req.query.completed;
    console.log(typeof status);
    var query;

    if (status === undefined) {
      query = {};
    } else {
      query = {
        where: {
          completed: JSON.parse(status),
        },
      };
    }

    try {
      console.log("error:", query);
      const tasks = await db.Todo.findAll(query);
      const ans = JSON.parse(JSON.stringify(tasks));
      console.log("error:", ans);
      return ans;
    } 
    catch (error) {
      console.log("error:", error);
    }
  }
  static async updateTask(req,res) {
    var taskid = JSON.parse(req.query.id);
    const updateParams = req.body;
    try {
      console.log(typeof(taskid));
      const completedtask = await db.Todo.update(
        updateParams,
        { where: { id: taskid } }
      );
      console.log(completedtask);
      if (completedtask == 0) {
        return "There is no task with this id .";
      }
      return "Task updated sucessfully.";
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new ServerError("Error updating task");
    }
  }
}

module.exports = Todolist;
