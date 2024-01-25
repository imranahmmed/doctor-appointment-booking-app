import express from 'express';
import apiRoutes from './api/index.js';

const router = express.Router();
const baseUrl = process.env.BASE_URL;

router.use(baseUrl, apiRoutes);
// router.use(baseUrl, (req, res) => res.status(404).json({ message: "No API Found on This Route." }))

export default router;
