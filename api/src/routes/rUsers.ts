//from modules
import { Router } from "express";

//controllers
import {
  getUsers,
  createUser,
  addUserToSchool,
  addUserToDegree,
} from "../controllers/cUsers";
import { tokenValidation } from "../libs/verifyToken/verifyToken";

const router = Router();

//private routes
router.post("/user", createUser);
router.get("/user", getUsers);
router.put("/user/school", addUserToSchool);
router.put("/user/degree", addUserToDegree);

/* router.get("/user",tokenValidation, getUsers);
router.post("/user",tokenValidation, createUser);
router.put("/user/school",tokenValidation, addUserToSchool);
router.put("/user/degree",tokenValidation, addUserToDegree); */
export default router;
