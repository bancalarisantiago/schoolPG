import express from "express";
import cors from "cors";
import morgan from "morgan";

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

export default app;
