const express = require("express");

const toDoController = require( "../controllers/todo.controller.js");

const router = express.Router();

router.post("/add_task",toDoController.addTask);
router.get("/get_all",toDoController.getAll);
router.put("/update_task",toDoController.updateTask);





module.exports =  router;