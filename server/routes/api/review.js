import express from "express"
import { getAllReviews, postReview } from "../../controllers/reviewController.js"
import { authenticate, restrict } from "../../middlewares/verifyToken.js"
const router = express.Router({ mergeParams: true })


router.get('/', getAllReviews)
router.post('/', authenticate, restrict(["patient"]), postReview)

export default router