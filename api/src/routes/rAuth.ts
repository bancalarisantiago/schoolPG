//from modules
import { Router } from "express";

//controllers
import { signin } from "../controllers/cAuth";

const router = Router();

router.post("/signin", signin);

export default router;
