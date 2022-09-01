const { application } = require("express");
const express = require("express");

//Routes

//Init our Express app
const app = express();

//Enable Express app to receive JSON data
app.use(express.json()); //Middleware

//Define Endpoints

module.exports = { app };
