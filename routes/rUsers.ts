//from modules
import { Router } from "express";

//controllers
import {
  getUsers,
  getUserById,
  getUserBy,
  createUser,
  updateUser,
  deleteUserById,
  addUserToSchool,
  addUserToCourse,
  addRelationTutorChild,
} from "../controllers/cUsers";
import { tokenValidation } from "../libs/verifyToken/verifyToken";

const router = Router();

//private routes
router.get("/user", getUsers);
router.get("/user/:id", getUserById);
router.post("/user/search", getUserBy);
router.delete("/user/:id", deleteUserById);
router.post("/user", createUser);
//router.put("/user/relationTutorToChild", addRelationTutorChild)
router.put("/user/:id", updateUser);
router.put("/user/school/:schoolId/:userId", addUserToSchool);
router.put("/user/course/:courseId/:userId", addUserToCourse);

/* router.get("/user",tokenValidation, getUsers);
router.post("/user",tokenValidation, createUser);
router.put("/user/school",tokenValidation, addUserToSchool);
router.put("/user/course",tokenValidation, addUserToCourse); */
export default router;
