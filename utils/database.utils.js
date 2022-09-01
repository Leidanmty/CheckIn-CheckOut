const { Sequelize, DataTypes } = require("sequelize");

//Estableciendo conexion de base de datos
const db = new Sequelize({
  dialect: "postgres",
  host: "127.0.0.1", //tambien se puede agregar como localhost
  username: "postgres",
  password: "1622091",
  port: 5432,
  database: "blogs",
  logging: false,
});

module.exports = { db, DataTypes };
