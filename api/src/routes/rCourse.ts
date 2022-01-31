//from modules
import { Router } from "express";
import { tokenValidation } from "../libs/verifyToken/verifyToken";

//controllers

import {
  getCourses,
  createCourse,
  getCourseById,
  addSubjectToCourse,
  attendanceUpdate,
  deleteCourseById,
  updateCourseById,
} from "../controllers/cCourse";

const router = Router();

//private routes
router.post("/course", tokenValidation, createCourse);

//non private routes
router.get("/course", getCourses);
router.get("/course/:id", getCourseById);
//router.put("/course/:courseId/:subjectId", addSubjectToCourse);
router.put("/course/update/:id", updateCourseById);
router.put("/course/:id", attendanceUpdate);
router.delete("/course/:id", deleteCourseById);

export default router;
