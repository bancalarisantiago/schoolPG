import express from "express";
import cors from "cors";
import morgan from "morgan";


// ... other imports 
import path from "path"

import router from "./routes/index";
import mongoose from "mongoose";
const uri =
  "mongodb+srv://CorregidorOscar:81MycBZ303VyaTFp@cluster0.qejah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  // "mongodb+srv://ischool:escuelita420@cluster0.pfkbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  
mongoose.connect(uri) // conexion a la base de datos
  // .then(() =>
  //   app.listen(process.env.PORT || 5000, () =>
  //     console.log(`Listening on port: ${process.env.PORT || 5000}`)
  //   )
  // ) // escucha en el puerto
  .catch((err: any) => console.log(err)); // error en la conexion
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.json({ limit: "30mb" })); // support json encoded bodies
app.use(express.urlencoded({ limit: "30mb", extended: true })); // support encoded bodies
app.use(cors(corsOptions)); // cors middleware sirve para permitir peticiones de otros dominios
app.use(morgan("dev"));
app.use("/api", router);
// https://www.mongodb.com/cloud/atlas
// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(5000, function () {
	console.log('App is listening on port 5000');
});
export default app;

