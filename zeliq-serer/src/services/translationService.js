import { translate } from 'api-translator';

// Cache for translations to avoid repeated API calls
const translationCache = new Map();

const getCacheKey = (text, lang) => `${lang}:${JSON.stringify(text)}`;

export const translateText = async (text, targetLang) => {
  // If target language is English, return original text
  if (targetLang === 'en') {
    return text;
  }

  const cacheKey = getCacheKey(text, targetLang);
  
  // Check cache first
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }

  try {
    const result = await translate(text, {
      from: 'en',
      to: targetLang,
    });
    
    // Cache the result
    translationCache.set(cacheKey, result);
    
    return result;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text on error
  }
};

export const translateBatch = async (texts, targetLang) => {
  // If target language is English, return original texts
  if (targetLang === 'en') {
    return texts;
  }

  try {
    // Check which texts need translation
    const textsToTranslate = [];
    const cachedResults = {};
    const textIndices = [];

    texts.forEach((text, index) => {
      const cacheKey = getCacheKey(text, targetLang);
      if (translationCache.has(cacheKey)) {
        cachedResults[index] = translationCache.get(cacheKey);
      } else {
        textsToTranslate.push(text);
        textIndices.push(index);
      }
    });

    // Translate uncached texts
    let translatedTexts = [];
    if (textsToTranslate.length > 0) {
      translatedTexts = await translate(textsToTranslate, {
        from: 'en',
        to: targetLang,
      });

      // Cache new translations
      textsToTranslate.forEach((text, i) => {
        const cacheKey = getCacheKey(text, targetLang);
        translationCache.set(cacheKey, translatedTexts[i]);
      });
    }

    // Combine cached and new translations
    const result = [];
    let newTranslationIndex = 0;
    
    texts.forEach((text, index) => {
      if (cachedResults.hasOwnProperty(index)) {
        result.push(cachedResults[index]);
      } else {
        result.push(translatedTexts[newTranslationIndex]);
        newTranslationIndex++;
      }
    });

    return result;
  } catch (error) {
    console.error('Batch translation error:', error);
    return texts; // Return original texts on error
  }
};

export const translateObject = async (obj, targetLang) => {
  // If target language is English, return original object
  if (targetLang === 'en') {
    return obj;
  }

  try {
    const result = await translate(obj, {
      from: 'en',
      to: targetLang,
    });
    return result;
  } catch (error) {
    console.error('Object translation error:', error);
    return obj; // Return original object on error
  }
};
