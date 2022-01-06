import mongoose from "mongoose";
import express from "express";
import app from "./index";

const PORT = process.env.PORT || 5000; // aca seteamos el puerto en el que va a correr el server
//const MONGO_URI= process.env["MONGO_URI"]
const uri =
  "mongodb+srv://ischool:escuelita420@cluster0.pfkbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) // conexion a la base de datos
  .then(() => app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))) // escucha en el puerto
  .catch((err: any) => console.log(err)); // error en la conexion
