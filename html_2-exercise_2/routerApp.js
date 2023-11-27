const express = require("express")
const path = require("path")
const app = express()

const nav = require("./routers/nav")

app.use(express.static(path.join(__dirname,"")))


app.use("/",(req,res,next)=>{
    next();
})

app.use("/",nav)


app.listen(3000, () =>{ 
    console.log(
        "Server is running on port 3000"
    )
})