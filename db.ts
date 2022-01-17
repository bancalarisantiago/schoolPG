import mongoose from "mongoose";
import app from "./index";

const uri =
  // "mongodb+srv://CorregidorOscar:81MycBZ303VyaTFp@cluster0.qejah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  "mongodb+srv://ischool:escuelita420@cluster0.pfkbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  

mongoose
  .connect(uri) // conexion a la base de datos
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Listening on port: ${process.env.PORT || 5000}`)
    )
  ) // escucha en el puerto
  .catch((err: any) => console.log(err)); // error en la conexion
