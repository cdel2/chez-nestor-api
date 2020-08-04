CREATE DATABASE IF NOT EXISTS chez_nestor;

USE chez_nestor;

CREATE USER IF NOT EXISTS 'nestor'@'localhost' IDENTIFIED BY 'admin';

GRANT ALL PRIVILEGES ON * . * TO 'nestor'@'localhost';

CREATE TABLE IF NOT EXISTS `customer` (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    email varchar(255) NOT NULL,    
    phone varchar(255) NOT NULL,
    birthDate date NOT NULL,
    nationality varchar(255) NOT NULL,
    UNIQUE(email),
    UNIQUE(phone)
);

CREATE TABLE IF NOT EXISTS `apartment` (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    street varchar(255) NOT NULL,
    zipCode varchar(255) NOT NULL,
    city varchar(255) NOT NULL,
    country varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `room` (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    num int NOT NULL,
    area decimal NOT NULL,
    price int NOT NULL,
    idApartment int,
    idCustomer int,
    FOREIGN KEY (idCustomer) REFERENCES customer(id),
    FOREIGN KEY (idApartment) REFERENCES apartment(id),
    UNIQUE(idCustomer)
);

