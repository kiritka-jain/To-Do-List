import todoservice from "../service/todoservice.js";

const toDoList = {
    
  getToDo: async (req, res) => {
    try {
      const todolist = await todoservice.getToDo();
      res.status(200).json({ "to do list": todolist });
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        console.error(error);
        res
          .status(error.statusCode || 500)
          .json({ message: error.message || "Server error" });
      }
    }
  },
  
};
