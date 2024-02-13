import express from "express"
import { getCheckoutSessionController } from "../../controllers/bookingController.js"
import { authenticate } from "../../middlewares/verifyToken.js"
const router = express.Router()

router.post("/checkout-session/:doctorId", authenticate, getCheckoutSessionController)

export default router