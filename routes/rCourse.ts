//from modules
import { Router } from "express";
import { tokenValidation } from "../libs/verifyToken/verifyToken";

//controllers

import {
  getCourses,
  createCourse,
  getCourseById,
  addSubjectToCourse,
  attendanceUpdate
} from "../controllers/cCourse";

const router = Router();

//private routes
router.get("/course", getCourses);
router.get("/course/:id", getCourseById);
router.post("/course", createCourse);
router.put("/course/:courseId/:subjectId", addSubjectToCourse);
router.put("/course/:id", attendanceUpdate)

/* router.get("/course", tokenValidation, getCourses);
router.get("/course/id", tokenValidation, getCourseById);
router.post("/course", tokenValidation, createCourse);
 */
export default router;
