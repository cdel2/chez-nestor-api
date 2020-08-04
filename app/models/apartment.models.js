const sql = require("./db.js");

// constructor
const Apartment = function(apartment) {
  this.name = apartment.name;
  this.street = apartment.street;
  this.zipCode = apartment.zipCode;
  this.city = apartment.city;
  this.country = apartment.country;
};


// create
Apartment.create = (newApartment, result) => {
  sql.query("INSERT INTO apartment SET ?", newApartment, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created apartment: ", { id: res.insertId, ...newApartment });
    result(null, { id: res.insertId, ...newApartment });
  });
};


// read
Apartment.findById = (apartmentId, result) => {
  sql.query(`SELECT * FROM apartment WHERE apartmentId = ${apartmentId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Found apartment: ", res[0]);
      result(null, res[0]);
      return;
    }

    // apartment is not found
    result({ kind: "not_found" }, null);
  });
};


// update
Apartment.updateById = (id, apartment, result) => {
  sql.query(
    "UPDATE apartment SET name = ?, street = ?, zipCode = ?, city = ?, country = ? WHERE id = ?",
    [apartment.name, apartment.street, apartment.zipCode, apartment.city, apartment.country, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // apartment is not found
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated apartment: ", { id: id, ...apartment });
      result(null, { id: id, ...apartment });
    }
  );
};


// delete
Apartment.remove = (id, result) => {
  sql.query("DELETE FROM apartment WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // apartment is not found 
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted apartment with id: ", id);
    result(null, res);
  });
};

module.exports = Apartment;
