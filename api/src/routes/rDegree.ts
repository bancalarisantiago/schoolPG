//from modules
import { Router } from "express";

//controllers
import { getDegrees, createDegree, getDegreeById } from "../controllers/cDegree";

const router = Router();

router.get("/degree", getDegrees);
router.get("/degree/id", getDegreeById);
router.post("/degree", createDegree);


export default router;
