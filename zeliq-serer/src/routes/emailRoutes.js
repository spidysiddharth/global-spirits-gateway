import express from 'express';
import { saveEmail, getAllEmails } from '../controllers/emailController.js';

const router = express.Router();

// POST /api/emails - Save a new email
router.post('/', saveEmail);

// GET /api/emails - Get all emails (for admin purposes)
router.get('/', getAllEmails);

export default router;
