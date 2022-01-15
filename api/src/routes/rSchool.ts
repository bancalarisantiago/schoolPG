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
router.get("/school", getAllSchools);
router.get("/school/:id", getSchoolById);
router.post("/school", createSchool);
router.put("/school/:id", updateSchool);

/* router.get("/school",tokenValidation, getAllSchools);
router.post("/school",tokenValidation, createSchool); */

export default router;
