import express from "express";
import cors from "cors";
import morgan from "morgan";


// ... other imports 
const path =require("path")

import router from "./routes/index";

const PORT = process.env.PORT || 5000; // Step 1
import mongoose from "mongoose";
const uri = process.env.MONGODB_URI ||
  // "mongodb+srv://CorregidorOscar:81MycBZ303VyaTFp@cluster0.qejah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  "mongodb+srv://ischool:escuelita420@cluster0.pfkbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  
mongoose.connect(uri) // conexion a la base de datos
  // .then(() =>
  //   app.listen(process.env.PORT || 5000, () =>
  //     console.log(`Listening on port: ${process.env.PORT || 5000}`)
  //   )
  // ) // escucha en el puerto
  .catch((err: any) => console.log(err)); // error en la conexion
const app = express();

const corsOptions = {
  origin: ["http://localhost:3000","https://pgschool.herokuapp.com"],
  // origin: "https://pgschool.herokuapp.com",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.json({ limit: "30mb" })); // support json encoded bodies
app.use(express.urlencoded({ limit: "30mb", extended: true })); // support encoded bodies
app.use(cors(corsOptions)); // cors middleware sirve para permitir peticiones de otros dominios
app.use(morgan("dev"));
app.use("/api", router);
// https://www.mongodb.com/cloud/atlas
// // Step 1:
// app.use(express.static(path.resolve(__dirname, "./client/build")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });
// ... other app.use middleware 
// app.use(express.static(path.join(__dirname, "client", "build")))

// // Right before your app.listen(), add this:
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });
// Step 3
if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
  });
}
app.listen(PORT, function () {
	console.log(`App is listening on port ${PORT}`);
});
export default app;

