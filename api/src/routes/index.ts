import { Router } from "express";
import userRoutes from "./rUsers";
import schoolRoutes from "./rSchool";
import degreeRoutes from "./rDegree";
const router = Router();

router.use("/", userRoutes);
router.use("/", schoolRoutes);
router.use("/", degreeRoutes);
export default router;
