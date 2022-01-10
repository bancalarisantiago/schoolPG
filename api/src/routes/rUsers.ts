//from modules
import { verify } from "crypto";
import { Router } from "express";

//controllers
import {
  getUsers,
  createUser,
  addUserToSchool,
  addUserToDegree,
  addRelationTutorChild
} from "../controllers/cUsers";
import { tokenValidation } from "../libs/verifyToken";

const router = Router();

//private routes
router.post("/user", createUser);

router.put("/user", addUserToSchool);
router.put("/user/relationTutorToChild", addRelationTutorChild)

router.get("/user", getUsers);
router.put("/user/school", addUserToSchool);
router.put("/user/degree", addUserToDegree);


/* router.get("/user",tokenValidation, getUsers);
router.post("/user",tokenValidation, createUser);
router.put("/user/school",tokenValidation, addUserToSchool);
router.put("/user/degree",tokenValidation, addUserToDegree); */
export default router;
