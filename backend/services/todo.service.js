const db = require( "../models/index.js");
const { ServerError,ValidationError } = require ("../errors/custom.errors.js");
const { send } = require("process");

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
      static  async getAll(res,req){
        const status = req.query.completed;
        console.log(typeof(status));
        if (status == "false"){
          try {
            const uncompletedtodo = await db.Todo.findAll({
              where: {
                completed: false
              }
            });
            const ans = JSON.parse(JSON.stringify(uncompletedtodo));
            return ans;
        } catch(error){
          console.log("error:",error);
        }
        }
        else if (status == "true"){
          try {
            const completedtodo = await db.Todo.findAll({
              where: {
                completed: true
              }
            });
            const ans = JSON.parse(JSON.stringify(completedtodo));
            return ans;
        } catch(error){
          console.log("error:",error);
        }
        }
        else{
            try {
              const completedtodo = await db.Todo.findAll()
              const ans = JSON.parse(JSON.stringify(completedtodo));
              return ans;
          } catch(error){
            console.log("error:",error);
          }
          }
        };
        
    }

module.exports  =Todolist;