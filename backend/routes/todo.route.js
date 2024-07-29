const express = require("express");

const toDoController = require( "../controllers/todo.controller.js");

const router = express.Router();

router.post("/addtask",toDoController.addTask);




module.exports =  router;