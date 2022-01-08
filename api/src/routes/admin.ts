import express from "express";
import { getAdmins, createAdmin,addSchool } from "../controllers/admin";

const router = express.Router();

router.get('/admin', getAdmins);
router.post('/admin', createAdmin);
router.post('/admin/add', addSchool);
export default router;