//from modules
import { Router } from "express";

//controllers
import {
  getUsers,
  createUser,
  addUserToSchool,
  addUserToCourse,
  addRelationTutorChild
} from "../controllers/cUsers";
import { tokenValidation } from "../libs/verifyToken/verifyToken";

const router = Router();

//private routes
router.post("/user", createUser);

router.put("/user", addUserToSchool);
router.put("/user/relationTutorToChild", addRelationTutorChild)

router.get("/user", getUsers);
router.put("/user/school", addUserToSchool);
router.put("/user/course", addUserToCourse);


/* router.get("/user",tokenValidation, getUsers);
router.post("/user",tokenValidation, createUser);
router.put("/user/school",tokenValidation, addUserToSchool);
router.put("/user/course",tokenValidation, addUserToCourse); */
export default router;
