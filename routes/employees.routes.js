const express = require("express");

//Controlers
const {} = require("../controllers/employees.controller");

//models
const {} = require("../models/employee.model");

const employeeRouter = express.Router();

//Employees endpoints

employeeRouter.get("/");

module.exports = { employeeRouter };
