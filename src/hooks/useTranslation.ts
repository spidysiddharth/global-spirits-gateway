import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const useTranslation = (texts: string[]) => {
  const { language, translateTexts, translations } = useLanguage();
  const [translatedTexts, setTranslatedTexts] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const translate = useCallback(async () => {
    if (language === 'en') {
      // For English, just map texts to themselves
      const result: Record<string, string> = {};
      texts.forEach(text => {
        result[text] = text;
      });
      setTranslatedTexts(result);
      return;
    }

    // Check if all texts are already translated
    const allTranslated = texts.every(text => translations[text]);
    if (allTranslated) {
      const result: Record<string, string> = {};
      texts.forEach(text => {
        result[text] = translations[text];
      });
      setTranslatedTexts(result);
      return;
    }

    setIsLoading(true);
    try {
      const translated = await translateTexts(texts);
      const result: Record<string, string> = {};
      texts.forEach((text, index) => {
        result[text] = translated[index];
      });
      setTranslatedTexts(result);
    } catch (error) {
      console.error('Translation hook error:', error);
      // Fallback to original texts
      const result: Record<string, string> = {};
      texts.forEach(text => {
        result[text] = text;
      });
      setTranslatedTexts(result);
    } finally {
      setIsLoading(false);
    }
  }, [language, texts, translateTexts, translations]);

  useEffect(() => {
    translate();
  }, [translate]);

  const t = useCallback((text: string): string => {
    return translatedTexts[text] || translations[text] || text;
  }, [translatedTexts, translations]);

  return { t, isLoading };
};
