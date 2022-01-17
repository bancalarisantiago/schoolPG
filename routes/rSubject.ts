//from modules
import { Router } from "express";

//controllers
import {getSubjects, createSubject, getSubjectById, deleteSubjectById, addCourseToSubject} from "../controllers/cSubject";

const router = Router();

router.get("/subject", getSubjects);
router.post("/subject", createSubject);
router.get("/subject/:id", getSubjectById);
router.delete("/subject/:id", deleteSubjectById);
router.put("/subject/:subjectId/:courseId", addCourseToSubject);


export default router;