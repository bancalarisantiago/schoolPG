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
} from "../controllers/cUsers";
import { tokenValidation } from "../libs/verifyToken/verifyToken";

const router = Router();

//private routes
router.get("/user/:id", tokenValidation, getUserById);
router.post("/user/search", tokenValidation, getUserBy);
router.post("/user", tokenValidation, createUser);
router.put("/user/:id", tokenValidation, updateUser);

//non private routes
router.get("/user", getUsers);
router.delete("/user/:id", deleteUserById);
router.put("/user/school/:schoolId/:userId", addUserToSchool);
router.put("/user/course/:courseId/:userId", addUserToCourse);

export default router;
