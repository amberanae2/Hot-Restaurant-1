//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up the Express App

var app = express();
var PORT = 3000;

//Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Customers info
var customers = [
{
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: ""
}
];

//Routes

//Route that sends the user first to the home
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
});
//route-add table page/make reservation reserve.html
app.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});
//route-view tables tables.html
app.get("/tables", function(req,res){
    res.sendFile(path.join(__dirname, "tables.html"));
});
//route-API table list
app.get("/api/customers", function(req, res) {
    return res.json(customers);
  });


//route-API Wait list
app.get("/api/customers", function(req, res) {
    var chosen = req.params.customers;
  
    console.log(chosen);
  
    for (var i = 0; i < customers.length; i++) {
      if (chosen === customers[i].customerName) {
        return res.json(customers[i]);
      }
    }
  
    return res.json(false);
  });

//route-clear tables

//Displays tables

//Create new tables - takes in JSON input
app.post("/api/customers", function(req, res) {
//req.body hosts is equal to the JSON post sent from the user
var newcustomer = req.body;

  console.log(newcustomer);

 // We then add the json the user sent to the customer array
 customers.push(newcustomer);

 // We then display the JSON to the users
 res.json(newcustomer);
});


function clearTable(){

    var currentURL = window.location.origin;
    $.ajax({url: currentURL + "/api/clear", method: "POST"})

}

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  


