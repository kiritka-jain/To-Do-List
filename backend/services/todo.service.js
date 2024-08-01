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
      query = {}
    } else {
      query = {
        where: {
          completed: JSON.parse(status),
        },
      }
    }

    try {
      console.log("error:", query);
      const tasks = await db.Todo.findAll(query);
      const ans = JSON.parse(JSON.stringify(tasks));
      console.log("error:", ans);
      return ans;
    } catch (error) {
      console.log("error:", error);
    }
  }
}

module.exports = Todolist;
