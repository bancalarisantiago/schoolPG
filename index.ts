import express from "express";
import cors from "cors";
import morgan from "morgan";


// ... other imports 
import path from "path"

import router from "./routes/index";

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
// app.listen(5000, function () {
// 	console.log('App is listening on port 5000');
// });
export default app;

