//from modules
import { Router } from "express";
import { tokenValidation } from "libs/verifyToken";

//controllers
import {
  getDegrees,
  createDegree,
  getDegreeById,
} from "../controllers/cDegree";

const router = Router();

//private routes
router.get("/degree", getDegrees);
router.get("/degree/id", getDegreeById);
router.post("/degree", createDegree);

/* router.get("/degree", tokenValidation, getDegrees);
router.get("/degree/id", tokenValidation, getDegreeById);
router.post("/degree", tokenValidation, createDegree);
 */
export default router;
