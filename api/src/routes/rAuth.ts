//from modules
import { Router } from "express";
import { tokenValidation } from "libs/verifyToken/verifyToken";

//controllers
import { login, tokenRefresh, logout } from "../controllers/cAuth";

const router = Router();

router.post("/refresh", tokenRefresh);

router.post("/login", login);

//private route
router.post("/logout", logout);

export default router;
