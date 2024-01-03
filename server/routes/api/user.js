import express from 'express';
import { updateUserController, deleteUserController, getSingleUserController, getAllUserController } from '../../controllers/userController.js';
const router = express.Router();

router.get('/', getAllUserController);
router.get('/:id', getSingleUserController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

export default router;
