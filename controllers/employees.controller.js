const { Employee } = require("../models/employee.model");

const getAllEmployees = async (req, res) => {
  try {
    await Employee.findAll();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllEmployees };
