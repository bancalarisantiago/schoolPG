//from modules
import express from "express";

//controller
import { getAllSchools, createSchool } from "../controllers/cSchool";

const mongoose = require("mongoose");
const router = express.Router();
const toId = mongoose.Types.ObjectId;

router.get("/school", getAllSchools);
router.post("/school", createSchool);

export default router;
