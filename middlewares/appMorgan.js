import express from "express"
import morgan from "morgan"

const app = express()

app.use(morgan('dev'))
app.use(morgan('Method :method, URL :url, Status :status :res[content-length] - :response-time ms'))


app.get("/", (req, res) => {
    res.send("Hello There")
})

app.get("/users", (req, res) => {
    res.send("Hello User")
})

app.get("/admin", (req, res) => {
    res.send("Hello Admin. How are you doing?")
})

app.listen(8081, () => {console.log("Server started at 8081")})