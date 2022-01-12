import { Router } from "express";
import userRoutes from "./rUsers";
import schoolRoutes from "./rSchool";
import courseRoutes from "./rCourse";
import subjectRoutes from "./rSubject"
import eventRoutes from "./rEvent"
import authRoutes from "./rAuth";

const router = Router();

router.use("/", authRoutes);
router.use("/", userRoutes);
router.use("/", schoolRoutes);
router.use("/", courseRoutes);
router.use("/", subjectRoutes);
router.use("/", eventRoutes);

export default router;
