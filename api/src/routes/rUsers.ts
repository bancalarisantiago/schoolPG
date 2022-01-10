//from modules
import { Router } from "express";

//controllers
import { getUsers, createUser, addUserToSchool, addRelationTutorChild } from "../controllers/cUsers";

const router = Router();

router.get("/user", getUsers);
router.post("/user", createUser);
router.put("/user", addUserToSchool);
router.put("/user/relationTutorToChild", addRelationTutorChild)

export default router;
