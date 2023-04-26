import express from "express"
import fs from "fs"
// import bodyParser from "body-parser"

const app = express()
let dataToLog = ''

// app.use(bodyParser.json())

function logRequest(req, res, next){
    console.log(req.method, req.url)
    next()
}

// function logToFile(req, res, next){
//     const dataToLog = req.method + " - " + req.url + "\n"
//     fs.appendFile("log.txt", dataToLog, (err, data) => {
//         if(err) throw err;
//     })
//     next()
// }

function addTimeStamp(req, res, next){
    dataToLog += Date.now() + " - ";
    next()
}

function logToFile(req, res, next){
    dataToLog += req.method + " - " + req.url + "\n"
    fs.appendFile("log.txt", dataToLog, (err, data) => {
        if(err) throw err;
    })
    next()
}



app.use(logRequest)
app.use(addTimeStamp)
app.use(logToFile)


app.get("/", (req, res) => {
    res.send("Hello There")
})

app.get("/users", (req, res) => {
    res.send("Hello User")
})

app.get("/admin", (req, res) => {
    res.send("Hello Admin")
})

app.listen(8081, () => {console.log("Server started at 8081")})