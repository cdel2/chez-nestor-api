const Apartment = require("../models/apartment.models.js");

// Create and Save a new Apartment
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const apartment = new Apartment({
    name : req.body.name,
    street : req.body.street,
    zipCode : req.body.zipCode,
    city : req.body.city,
    country : req.body.country,
  });


  // Create a Apartment
  Apartment.create(apartment, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the apartment."
      });
    else res.send(data);
  });
};


// Find a single Apartment with a apartmentId
exports.findOne = (req, res) => {
  Apartment.findById(req.params.apartmentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Apartment with id ${req.params.apartmentId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Apartment with id " + req.params.apartmentId
        });
      }
    } else res.send(data);
  });
};


// Update a Apartment identified by the apartmentId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Apartment.updateById(
    req.params.apartmentId,
    new Apartment(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Apartment with id ${req.params.apartmentId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Apartment with id " + req.params.apartmentId
          });
        }
      } else res.send(data);
    }
  );
};


// Delete a Apartment with the specified apartmentId in the request
exports.delete = (req, res) => {
  Apartment.remove(req.params.apartmentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Apartment with id ${req.params.apartmentId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Apartment with id " + req.params.apartmentId
        });
      }
    } else res.send({ message: `Apartment was deleted successfully!` });
  });
};