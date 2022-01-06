import mongoose from "mongoose";
import app from "./app";

const uri =
  "mongodb+srv://ischool:escuelita420@cluster0.pfkbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) // conexion a la base de datos
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening on port: ${process.env.PORT}`)
    )
  ) // escucha en el puerto
  .catch((err) => console.log(err)); // error en la conexion
