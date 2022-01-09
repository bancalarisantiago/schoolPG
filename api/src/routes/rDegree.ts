//from modules
import { Router } from "express";

//controllers
import { getDegrees, createDegree } from "../controllers/cDegree";

const router = Router();

router.get("/degree", getDegrees);
router.post("/degree", createDegree);


export default router;
