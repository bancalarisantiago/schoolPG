//from modules
import { Router } from "express";

//controllers
import { getDegrees, createDegree, getDegreeById, addSubjectToDegree } from "../controllers/cDegree";

const router = Router();

router.get("/degree", getDegrees);
router.get("/degree/id", getDegreeById);
router.post("/degree", createDegree);
router.put("/degree/id/subject", addSubjectToDegree)


export default router;
