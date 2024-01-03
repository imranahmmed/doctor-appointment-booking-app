import express from 'express';
const router = express.Router();
import authRoutes from './auth.js';
import userRoutes from './user.js'
import doctorRoutes from './doctor.js'

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/doctors', doctorRoutes);

export default router;
