const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const cors = require("cors");
const configs = require("./configs")

//dependencies
app.use(cors(configs.corsConfig))




//middlewares





//routes





//listener
app.listen(PORT, ()=>{
    const date = new Date();
    console.log(`server started at ${PORT} on ${date.getDate()}th, ${date.getHours()}hrs`)
})


