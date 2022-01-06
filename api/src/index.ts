import app from "./app";
import dotenv from "dotenv";
import "./database";

dotenv.config();

function main() {
  app.listen(app.get("port"));
  console.log("server on port", app.get("port"));
}

main();

// https://www.mongodb.com/cloud/atlas
// aca seteamos el puerto en el que va a correr el server
//const MONGO_URI= process.env["MONGO_URI"]
