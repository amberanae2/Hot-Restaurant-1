//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up the Express App

var app = express();
var PORT = 3000;
console.log("you are connected to " + PORT);

//Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Customers
    //customername
    //phoneNumber
    //customerEmail
    //customerID
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



//route-API Wait list

//route-clear tables

//Displays tables

//Create new tables - takes in JSON input

//req.body hosts is equal to the JSON post sent from the user


/////

function clearTable(){

    var currentURL = window.location.origin;
    $.ajax({url: currentURL + "/api/clear", method: "POST"})

}




