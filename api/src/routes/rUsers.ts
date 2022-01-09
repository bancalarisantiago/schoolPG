//from modules
import { Router } from "express";

//controllers
import { getUsers, createUser, addUserToSchool } from "../controllers/cUsers";

const router = Router();

router.get("/user", getUsers);
router.post("/user", createUser);
router.put("/user", addUserToSchool);


export default router;
