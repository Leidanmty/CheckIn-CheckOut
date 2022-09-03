const { Employee } = require("../models/employee.model");

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200)
    res.json({
      status: 'success',
      data: {
        employees,
      },
    });

  } catch (error) {
    console.log(error);
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({where: {id}});

    if(!employee){
      return res.status(404).json({
        status: 'error',
        message: 'Employee not foud'
      });
    }

    res.json({
      status: 'success',
      data: {
        employee,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

const createEmployee = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newEmployee = await Employee.create({entranceTime});

    res.status(201).json({
      status: "success",
      data: { newEmployee },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { id } = req.params;

    //Check if the employee exist before update
    const employee = await Employee.findOne({where: {id}});

    //If employee doesn't exist, send error message
    if(!employee){
      return res.status(404).json({
        status: 'error',
        message: 'Employe not found'
      });
    }

    await employee.update({exitTime});

    res.status(200).json({
      status: 'success',
      data: { employee }
    });
  } catch (error) {
    console.log(error);  
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findOne({where: { id }});

    if(!employee){
      return res.status(404).json({
        status: 'error',
        message: 'Employee not foud'
      });
    }

    await Employee.update({status: 'Cancel'});

    res.status(204).json ({status: 'success'});
  } catch (error) {
    console.log(error);
  }
};

module.exports = { 
  getAllEmployees, 
  createEmployee, 
  updateEmployee, 
  deleteEmployee,
  getOneEmployee
};
