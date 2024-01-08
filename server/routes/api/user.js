import express from 'express';
import { updateUserController, deleteUserController, getSingleUserController, getAllUserController, getUserProfile, myAppointments } from '../../controllers/userController.js';
const router = express.Router();
import { authenticate, restrict } from '../../middlewares/verifyToken.js'


router.get('/', authenticate, restrict(["admin"]), getAllUserController);
router.get('/:id', authenticate, restrict(["admin", "patient", "doctor"]), getSingleUserController);
router.get('/profile/me', authenticate, restrict(["admin", "patient"]), getUserProfile);
router.get('/appointment/my-appointment', authenticate, restrict(["admin", "patient"]), myAppointments);
router.put('/:id', authenticate, restrict(["admin", "patient"]), updateUserController);
router.delete('/:id', authenticate, restrict(["admin", "patient"]), deleteUserController);

export default router;
