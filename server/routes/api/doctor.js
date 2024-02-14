import express from "express";
import { getAllDoctorController, getSingleDoctorController, updateDoctorController, deleteDoctorController, getDoctorProfile } from "../../controllers/doctorController.js";
const router = express.Router();
import { authenticate, restrict } from '../../middlewares/verifyToken.js';
import reviewRouter from './review.js';


router.use('/:id/reviews', reviewRouter)

router.get('/', getAllDoctorController)
router.get('/:id', getSingleDoctorController)
router.put('/:id', authenticate, restrict(["admin", "doctor"]), updateDoctorController)
router.delete('/:id', authenticate, restrict(["admin", "doctor"]), deleteDoctorController)
router.get('/profile/me', authenticate, restrict(["admin", "doctor"]), getDoctorProfile)

export default router