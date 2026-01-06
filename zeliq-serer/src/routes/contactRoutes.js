import express from 'express';
import { handleContactForm } from '../controllers/contactController.js';

const router = express.Router();

// POST /api/contact - Handle contact form submission
router.post('/contact', handleContactForm);

export default router;
