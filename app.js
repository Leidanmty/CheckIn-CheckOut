const { application } = require("express");
const express = require("express");

//Routes
const { employeeRouter } = require("./routes/employees.routes");

//Init our Express app
const app = express();

//Enable Express app to receive JSON data
app.use(express.json()); //Middleware

//Define Endpoints
app.use('/api/v1/employees', employeeRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method}/${req.url} this end-point doesn't exist in our server`,
  });
});

module.exports = { app };
