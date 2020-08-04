module.exports = app => {
    const apartments = require("../controllers/apartment.controllers.js");

    // Create a new apartment
    app.post("/apartments", apartments.create);
  
    // Retrieve a single apartment with apartmentId
    app.get("/apartments/:apartmentId", apartments.findOne);
  
    // Update a apartment with apartmentId
    app.put("/apartments/:apartmentId", apartments.update);
  
    // Delete a apartment with apartmentId
    app.delete("/apartments/:apartmentId", apartments.delete);

  };