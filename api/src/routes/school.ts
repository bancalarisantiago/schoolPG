import express from "express";
import { getAllSchools, createSchool } from "../controllers/school";

const router = express.Router();

router.get('/school', getAllSchools);
router.post('/school', createSchool);

export default router;