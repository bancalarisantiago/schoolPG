import { Router } from "express";
import userRoutes from "./rUsers";
import schoolRoutes from "./rSchool";
import degreeRoutes from "./rDegree";
import subjectRoutes from "./rSubject"
const router = Router();

router.use("/", userRoutes);
router.use("/", schoolRoutes);
router.use("/", degreeRoutes);
router.use("/",subjectRoutes)
export default router;
