import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import router from "./routes/user"

const app = express();

app.use(express.json({ limit: '30mb'})); // support json encoded bodies
app.use(express.urlencoded({ limit: '30mb',extended: true })); // support encoded bodies
app.use(cors()); // cors middleware sirve para permitir peticiones de otros dominios

app.use('/posts', router);
// https://www.mongodb.com/cloud/atlas


const PORT = process.env.PORT || 5000; // aca seteamos el puerto en el que va a correr el server
//const MONGO_URI= process.env["MONGO_URI"]
const uri ="mongodb+srv://ischool:escuelita420@cluster0.pfkbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose
    .connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}) // conexion a la base de datos
    .then(() => app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))) // escucha en el puerto
    .catch((err) => console.log(err)); // error en la conexion

