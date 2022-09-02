const express = require("express");

//Controlers
const { getAllEmployees, createEmployee, updateEmployee, deleteEmployee, getOneEmployee } = require("../controllers/employees.controller");

//models
const { Employee } = require("../models/employee.model");

const employeeRouter = express.Router();

//Employees endpoints
employeeRouter.get("/", getAllEmployees);

employeeRouter.get("/:id", getOneEmployee);

employeeRouter.post("/", createEmployee);

employeeRouter.patch("/:id", updateEmployee);

employeeRouter.delete("/:id", deleteEmployee);

module.exports = { employeeRouter };
