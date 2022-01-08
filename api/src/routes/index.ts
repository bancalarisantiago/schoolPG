import { Router } from "express";
import userRoutes from "./rUsers";
import schoolRoutes from "./rSchool";
const router = Router();

router.use("/", userRoutes);
router.use("/", schoolRoutes);

export default router;
