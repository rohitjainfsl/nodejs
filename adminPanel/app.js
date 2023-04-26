import express from "express"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())

app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.send("<h1>Welcome to admin panel</h1>")
})

app.get("/admin/login", (req, res) => {
    res.render("static/login", {
        pageTitle: "Login",
        loginHeading: "Login to your account",
        loginButton: "Login"
    })
})
app.get("/admin/dashboard", (req, res) => {
    res.render("static/dashboard", {
        pageTitle: "Dashboard",
        dashboardHeading: "Dashboard",
        dashboardButton: "Logout",
        posts: [
            {id: 1, title: "Hello World", author: 'Abhishek Jain', content: "This is a sample content"},
            {id: 2, title: "IPL", author: 'Aditya Kamodiya', content: "This is a sample content"},
            {id: 3, title: "Politics", author: 'Aaryan Jain', content: "This is a sample content"},
            {id: 4, title: "Apple in India", author: 'Uday Chauhan', content: "This is a sample content"},
        ]
    })
})

app.post("/admin/dashboard", (req, res) => {
    res.redirect("/admin/dashboard")
})

app.listen(8080, () => console.log("Server started at 8080"))