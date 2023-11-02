var express = require("express");
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.post("/foo", function (req, res) {
  res.send({ baz: "bat" });
});

app.post("/new-todo", function (req, res) {
  console.log(req.body);
  res.render("partials/todos", { data: req.body });
});

app.listen(8080);
console.log("Server is listening on port 8080");
