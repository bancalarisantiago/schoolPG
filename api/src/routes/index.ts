import { Router } from "express";
import userRoutes from "./rUsers";
import schoolRoutes from "./rSchool";
import degreeRoutes from "./rDegree";
import authRoutes from "./rAuth";
const router = Router();

router.use("/", userRoutes);
router.use("/", schoolRoutes);
router.use("/", degreeRoutes);
router.use("/", authRoutes);
export default router;
