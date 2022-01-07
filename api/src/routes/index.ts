import {Router} from 'express';
import userRoutes from './user';
const router = Router();

router.use('/', userRoutes);

export default router;

