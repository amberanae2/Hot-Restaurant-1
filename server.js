//Dependencies

var express = require("express");
var bodyParser = require("body-parser");


//Set up the Express App

var app = express();
var PORT = process.env.PORT || 3000;

//Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// ROUTER

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTNER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  


