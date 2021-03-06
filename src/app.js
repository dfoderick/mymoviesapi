var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var routes = require("./routes/routes.js")

var app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

var server = app.listen(process.env.PORT, function () {
    console.log("app running on port.", server.address().port)
})