import { translateText, translateBatch, translateObject } from '../services/translationService.js';

export const handleTranslate = async (req, res) => {
  try {
    const { text, texts, object, targetLang } = req.body;

    if (!targetLang) {
      return res.status(400).json({
        success: false,
        message: 'Target language is required.',
      });
    }

    // Validate target language
    const supportedLangs = ['en', 'ms', 'ar', 'zh-CN'];
    if (!supportedLangs.includes(targetLang)) {
      return res.status(400).json({
        success: false,
        message: 'Unsupported language. Supported: en, ms, ar, zh-CN',
      });
    }

    // Handle single text translation
    if (text) {
      const translated = await translateText(text, targetLang);
      return res.status(200).json({
        success: true,
        translated,
      });
    }

    // Handle batch text translation
    if (texts && Array.isArray(texts)) {
      const translated = await translateBatch(texts, targetLang);
      return res.status(200).json({
        success: true,
        translated,
      });
    }

    // Handle object translation
    if (object && typeof object === 'object') {
      const translated = await translateObject(object, targetLang);
      return res.status(200).json({
        success: true,
        translated,
      });
    }

    return res.status(400).json({
      success: false,
      message: 'Please provide text, texts array, or object to translate.',
    });
  } catch (error) {
    console.error('Translation controller error:', error);
    res.status(500).json({
      success: false,
      message: 'Translation failed. Please try again.',
    });
  }
};
