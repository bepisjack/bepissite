const express = require('express')
const bodyParser = require('body-parser')
const users = [{
        userMessage: "Hi",
        userName: "Aditya Gupta"
    },
    {
        userMessage: "Hello",
        userName: "Vanshita Jaiswal"
    }
]

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))


app.get("/", function (req, res) {
    res.render("home", {
        data: users
    })
})

app.post("/", (req, res) => {
    const inputUserName = req.body.userName
    const inputUserMessage = req.body.userMessage

    users.push({
        userName: inputUserName,
        userMessage: inputUserMessage,
    })

    res.render("home", {
        data: users
    })
})

app.listen(3000, (req, res) => {
    console.log("App is running on port 3000")
})