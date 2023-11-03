var express = require("express");
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// JX page
app.get("/jx", function (req, res) {
  res.render("pages/jx");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.get("/stores", function (req, res) {
  res.render("pages/stores", { data: { x: 51.0517983, y: 4.4515703 } });
});

app.post("/foo", function (req, res) {
  res.send({ baz: "bat" });
});

app.post("/new-todo", function (req, res) {
  console.log("posted to /new-todo with:", req.body);
  res.render("partials/todos", { data: req.body });
});

app.post("/new-todo-jx", function (req, res) {
  console.log("posted to /new-todo-jx with:", req.body);
  res.render("partials/todos-jx", { data: req.body });
});

app.post("/stores-map", function (req, res) {
  console.log("posted to /stores-map with:", req.body);
  res.render("partials/leaflet-form", { data: req.body });
});

app.listen(8080);
console.log("Server is listening on port 8080");
