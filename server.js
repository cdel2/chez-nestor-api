const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests with content-type = application/json
app.use(bodyParser.json());

// parse requests with content-type = application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue Chez Nestor !" });
});

// include all routes
require("./app/routes/customer.routes.js")(app);
require("./app/routes/apartment.routes.js")(app);
require("./app/routes/room.routes.js")(app);


// set port, listen for requests
app.listen(3000, () => {
  //console.log("Server is running on port 3000.");
});

module.exports = app;