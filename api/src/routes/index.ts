import { Router } from 'express';
import userRoutes from './user';
import schoolRoutes from "./school"
const router = Router();

router.use('/', userRoutes);
router.use('/',schoolRoutes);

export default router;

