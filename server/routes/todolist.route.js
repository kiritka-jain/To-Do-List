import express from 'express';

const router = express.Router();

router.get('/getAllTasks',()=>{
  console.log("All to do tasks.")
});




export default router;