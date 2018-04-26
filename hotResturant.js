// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// New Customers (DATA)
// =============================================================
var customers = [
  {
    name: "Sidney",
    phone_number: 469-999-9999,
    email: "gitgit@gmail.com",
    unique_ID: 2566,
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Hot Resturant!")
  res.sendFile(path.join(__dirname, "./index.html"));
});

// Displays all customers
app.get("/api/tableLink", function(req, res) {
  return res.json(customers);
});

// Displays a single customer, or returns false
app.get("/api/tableLink/:waitList", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < customers.length; i++) {
    if (chosen === customers[i].routeName) {
      return res.json(customers[i]);
    }
  }

  return res.json(false);
});

// Create New Customer - takes in JSON input
app.post("/api/waitLink", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcustomer = req.body;

  console.log(newcustomer);

  // We then add the json the user sent to the customer array
  customers.push(newcustomer);

  // We then display the JSON to the users
  res.json(newcustomer);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
