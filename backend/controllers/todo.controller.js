const todoservice = require("../services/todo.service.js");
const { ValidationError } = require("../errors/custom.errors.js");

const todolist = {
  addTask: async (req, res) => {
    const { id, title, completed } = req.body;

    try {
      const newTask = await todoservice.addTask({ id, title, completed });
      res.status(201).json(newTask);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).json({ message: error.message });
      } else {
        console.error(error);
        res.status(500).json({ message: "Server error" });
      }
    }
  },
  getAll: async (req, res) => {
    try {
      const newTask = await todoservice.getAll(res, req);
      res.status(200).send(newTask)
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  },
  updateTask: async(req,res)=> {
    try{
      const task = await todoservice.updateTask(req,res);
      res.status(200).send(task)
    }catch(err){
      res.status(500).json({ message: "Server error" });
    }
  }
};
module.exports = todolist;
