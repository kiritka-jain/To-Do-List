import express from 'express';
import toDoController from "../controllers/todolist.controller.js"

const router = express.Router();

router.get('/gettodoList',toDoController.getToDo);
router.post("/addtask",toDoController.addTask);




export default router;