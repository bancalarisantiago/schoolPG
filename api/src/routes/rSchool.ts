//from modules
import { Router } from "express";

//controller
import { getAllSchools, createSchool } from "../controllers/cSchool";

const router = Router();

router.get("/school", getAllSchools);
router.post("/school", createSchool);

export default router;
