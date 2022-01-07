import express from "express";
import { getAdmins, createAdmin } from "../controllers/admin";

const router = express.Router();

router.get('/admin', getAdmins);
router.post('/admin', createAdmin);

export default router;