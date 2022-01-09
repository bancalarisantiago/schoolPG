//from modules
import { Router } from "express";

//controllers
import { getUsers, createUser, addUserToSchool, addUserToDegree } from "../controllers/cUsers";

const router = Router();

router.get("/user", getUsers);
router.post("/user", createUser);
router.put("/user/school", addUserToSchool);
router.put("/user/degree", addUserToDegree);


export default router;
