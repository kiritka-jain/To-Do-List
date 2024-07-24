import express from 'express';
import toDoListRouter from "./todolist.route.js";

const router = express.Router();

router.use('/todolist', toDoListRouter);

export default router;