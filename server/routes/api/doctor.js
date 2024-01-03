import express from "express";
import { getAllDoctorController, getSingleDoctorController, updateDoctorController, deleteDoctorController } from "../../controllers/doctorController.js";
const router = express.Router()

router.get('/', getAllDoctorController)
router.get('/:id', getSingleDoctorController)
router.put('/:id', updateDoctorController)
router.delete('/:id', deleteDoctorController)

export default router