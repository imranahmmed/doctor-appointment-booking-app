import express from 'express';
import { updateUserController, deleteUserController, getSingleUserController, getAllUserController } from '../../controllers/userController.js';
const router = express.Router();
import { authenticate, restrict } from '../../middlewares/verifyToken.js'


router.get('/', authenticate, restrict(["admin"]), getAllUserController);
router.get('/:id', authenticate, restrict(["admin", "patient", "doctor"]), getSingleUserController);
router.put('/:id', authenticate, restrict(["admin", "patient"]), updateUserController);
router.delete('/:id', authenticate, restrict(["admin", "patient"]), deleteUserController);

export default router;
