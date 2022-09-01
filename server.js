const { app } = require("./app.js");

//Utils
const { db } = require("./utils/database.utils");

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    //Set server
    const PORT = 2000;
    //Express server o Set server to listen
    app.listen(PORT, () => {
      console.log("Express app running");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
