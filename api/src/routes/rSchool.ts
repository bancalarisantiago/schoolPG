//from modules
import { Router } from "express";
import { tokenValidation } from "../libs/verifyToken/verifyToken";

//controller
import {
  getAllSchools,
  createSchool,
  updateSchool,
  getSchoolById,
} from "../controllers/cSchool";

const router = Router();

//private routes
//router.get("/school/:id", tokenValidation, getSchoolById);
router.post("/school", tokenValidation, createSchool);
router.get("/school/:id", getSchoolById);
//non private routes
router.get("/school", getAllSchools);
router.put("/school/:id", updateSchool);

export default router;
