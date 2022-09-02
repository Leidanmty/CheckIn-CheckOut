const { app } = require("./app.js");

//Utils
const { db } = require("./utils/database.utils");

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync({ force: true });

    //Set server
    const PORT = 3000;
    //Express server o Set server to listen
    app.listen(PORT, () => {
      console.log("Express app running");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
