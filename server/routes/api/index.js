import express from 'express';
const router = express.Router();
import authRoutes from './auth.js';
import userRoutes from './user.js';
import doctorRoutes from './doctor.js';
import reviewRoutes from './review.js';

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/doctors', doctorRoutes);
router.use('/reviews', reviewRoutes);

export default router;
