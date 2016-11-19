var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("resumelist", ["resumelist"]);
var bodyParser = require("body-parser");

// Replaced with app.use(express.static(__dirname + "/public"));
// app.get('/', function (req, res){
//   res.send("Hello World from server.js")
// });

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/resume', function(req, res) {
  console.log("I received a GET request");

  db.resumelist.find(function (err, docs){
    console.log(docs);
    res.json(docs);
  });

});

app.get('/resume', function(req, res) {
  console.log("I received a GET request");

    dbSkill.skilllist.find(function(err, docs){
      console.log(docs);
      res.json(docs);
    });
});

app.listen(8080);
console.log("Server running on port 8080");
