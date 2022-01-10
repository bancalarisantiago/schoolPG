//from modules
import { Router } from "express";
import { tokenValidation } from "../libs/verifyToken/verifyToken";

//controller
import { getAllSchools, createSchool } from "../controllers/cSchool";

const router = Router();

//private routes
router.get("/school", getAllSchools);
router.post("/school", createSchool);

/* router.get("/school",tokenValidation, getAllSchools);
router.post("/school",tokenValidation, createSchool); */

export default router;
