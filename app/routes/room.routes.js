module.exports = app => {
    const rooms = require("../controllers/room.controllers.js");

    // Create a new room
    app.post("/rooms", rooms.create);
  
    // Retrieve a single room with roomId
    app.get("/rooms/:roomId", rooms.findOne);
  
    // Update a room with roomId
    app.put("/rooms/:roomId", rooms.update);
  
    // Delete a room with roomId
    app.delete("/rooms/:roomId", rooms.delete);

  };