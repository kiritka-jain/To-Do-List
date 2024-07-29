const express = require("express");

const toDoController = require( "../controllers/todo.controller.js");

const router = express.Router();

router.post("/addtask",toDoController.addTask);
router.get("/getall",toDoController.getAll);




module.exports =  router;