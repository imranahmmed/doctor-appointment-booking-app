import express from 'express';
const router = express.Router();
import authRoutes from './auth.js';
import userRoutes from './user.js';
import doctorRoutes from './doctor.js';
import reviewRoutes from './review.js';
import bookingRoutes from './booking.js';

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/doctors', doctorRoutes);
router.use('/reviews', reviewRoutes);
router.use('/bookings', bookingRoutes);

export default router;
