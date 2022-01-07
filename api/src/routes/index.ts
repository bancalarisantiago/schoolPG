import { Router } from 'express';
import userRoutes from './user';
import schoolRoutes from "./school"
import adminRoutes from "./admin"
const router = Router();

router.use('/', userRoutes);
router.use('/',schoolRoutes);
router.use('/',adminRoutes);

export default router;

