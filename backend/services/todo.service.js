const db = require( "../models/index.js");
const { ServerError,ValidationError } = require ("../errors/custom.errors.js");

class Todolist {
    static async addTask(taskData) {
      console.log("taskData", taskData);
        try {
          const newTask = await db.Todo.create(taskData);
          return newTask;
        } catch (error) {
          if (error.name === 'SequelizeValidationError') {
            throw new ValidationError('Invalid task data');
          }
          console.log("err", error)
          throw new ServerError('Error adding task');
        }
      }

}
module.exports  =Todolist;