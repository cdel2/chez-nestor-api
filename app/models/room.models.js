const sql = require("./db.js");

// constructor
const Room = function(room) {
  this.num = room.num;
  this.area = room.area;
  this.price = room.price;
  this.idApartment = room.idApartment;
  this.idCustomer = room.idCustomer;
};


// create
Room.create = (newRoom, result) => {
  sql.query("INSERT INTO room SET ?", newRoom, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created room: ", { id: res.insertId, ...newRoom });
    result(null, { id: res.insertId, ...newRoom });
  });
};

// read all of given apartment
Room.findAllByApartmentId = (idApartment, result) => {
  sql.query(`SELECT * FROM room WHERE idApartment = ${idApartment}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Found rooms : ", res);
      result(null, res);
      return;
    }

    // room is not found
    result({ kind: "not_found" }, null);
  });
};


// read one
Room.findById = (roomId, result) => {
  sql.query(`SELECT * FROM room WHERE id = ${roomId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Found room: ", res[0]);
      result(null, res[0]);
      return;
    }

    // room is not found
    result({ kind: "not_found" }, null);
  });
};


// update
Room.updateById = (id, room, result) => {
  sql.query(
    "UPDATE room SET num = ?, area = ?, price = ?, idApartment = ?, idCustomer = ? WHERE id = ?",
    [room.num, room.area, room.price, room.idApartment, room.idCustomer, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // room is not found
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated room: ", { id: id, ...room });
      result(null, { id: id, ...room });
    }
  );
};


// delete
Room.remove = (id, result) => {
  sql.query("DELETE FROM room WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // room is not found 
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted room with id: ", id);
    result(null, res);
  });
};

module.exports = Room;
