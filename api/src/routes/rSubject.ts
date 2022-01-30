//from modules
import { Router } from "express";

//controllers
import {
  getSubjects,
  createSubject,
  getSubjectById,
  deleteSubjectById,
  addCourseToSubject,
  updateSubjectById,
} from "../controllers/cSubject";
import { tokenValidation } from "../libs/verifyToken/verifyToken";

const router = Router();

//private routes
router.post("/subject", tokenValidation, createSubject);

//non private routes
router.get("/subject", getSubjects);
router.get("/subject/:id", getSubjectById);
router.delete("/subject/:id", deleteSubjectById);
//router.put("/subject/:subjectId/:courseId", addCourseToSubject);
router.put("/subject/update/:id", updateSubjectById);

export default router;
