
const express = require("express");
const indexRouter = require("./routes/index.route.js");
// const cors = require("cors");


const app = express();
const PORT = 3001;

// app.use(cors());
app.use(express.json());
app.use('/', indexRouter);

app.listen(PORT,()=>{
    console.log(`Listening at: ${PORT}`);
});


  
