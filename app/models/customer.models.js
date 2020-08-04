const sql = require("./db.js");

// constructor
const Customer = function(customer) {
  this.firstName = customer.firstName;
  this.lastName = customer.lastName;
  this.phone = customer.phone;
  this.birthDate = customer.birthDate;
  this.nationality = customer.nationality;
};


// create
Customer.create = (newCustomer, result) => {
  sql.query("INSERT INTO customer SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};


// read
Customer.findById = (customerId, result) => {
  sql.query(`SELECT * FROM customer WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // customer is not found
    result({ kind: "not_found" }, null);
  });
};


// update
Customer.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE customer SET firstName = ?, lastName = ?, phone = ?, birthDate = ?, nationality = ? WHERE id = ?",
    [customer.firstName, customer.lastName, customer.phone, customer.birthDate, customer.nationality, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // customer is not found
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};


// delete
Customer.remove = (id, result) => {
  sql.query("DELETE FROM customer WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // customer is not found
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};

module.exports = Customer;
