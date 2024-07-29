
const express = require("express");
const indexRouter = require("./routes/index.route.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', indexRouter);

app.listen(PORT,()=>{
    console.log(`Listening at: ${PORT}`);
});


  
