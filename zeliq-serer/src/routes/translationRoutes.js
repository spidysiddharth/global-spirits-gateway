import express from 'express';
import { handleTranslate } from '../controllers/translationController.js';

const router = express.Router();

// POST /api/translate - Handle translation requests
router.post('/translate', handleTranslate);

export default router;
