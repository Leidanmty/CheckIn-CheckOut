const express = require("express");

//Controlers
const { getAllEmployees } = require("../controllers/employees.controller");

//models
const {} = require("../models/employee.model");

const employeeRouter = express.Router();

//Employees endpoints

employeeRouter.get("/", getAllEmployees);

module.exports = { employeeRouter };
