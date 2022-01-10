//from modules
import { Router } from "express";

//controllers
import {getSubjects, createSubject, getSubjectById  } from "../controllers/cSubject";

const router = Router();

router.get("/subject", getSubjects);
router.get("/subject/id", getSubjectById);
router.post("/subject", createSubject);


export default router;