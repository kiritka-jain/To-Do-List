import express from 'express';
import indexRouter from "./routes/index.route.js";

const app = express();
const PORT = 3000;


app.use('/', indexRouter);

app.listen(PORT,()=>{
    console.log(`Listening at: ${PORT}`);
});

  
