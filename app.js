let express = require("express")
let morgan = require("morgan")
var fs = require('fs')
let path = require("path")

let app = express()


// app.use((req,res,next)=> {
//     console.log(req.query);
//     console.log("I'm in Middleware");
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method," " , req.path , " " , req.hostname ," " ,req.time);
//     next();
// })



// app.use(morgan('combined'));
// create a write stream (in append mode)
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger

app.use(morgan('combined'))



app.get("/" , morgan('tiny'),(req,res) => {
    res.send("I'm Groot")
})





app.use((req,res) => {
    res.send("Error : 404 PAGE NOT FOUND")
})

let PORT = 8000
let URL = `http://localhost:${PORT}`
app.listen(PORT , ()=> {
    console.log("App is listening at port : ",PORT , " " ,URL );
})
+1+1