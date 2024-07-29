
const express = require("express");

const toDoRouter = require( "./todo.route.js");

const router = express.Router();

router.use('/todo', toDoRouter);

module.exports = router;