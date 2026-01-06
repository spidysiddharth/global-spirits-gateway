import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

// Import static translations
import enTranslations from '@/locales/en.json';
import msTranslations from '@/locales/ms.json';
import arTranslations from '@/locales/ar.json';
import zhCNTranslations from '@/locales/zh-CN.json';

type Language = 'en' | 'ms' | 'ar' | 'zh-CN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGES: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'zh-CN', name: 'Chinese', nativeName: '中文' },
];

export { LANGUAGES };

// All translations stored as static JSON - instant access, no API calls
const translationMap: Record<Language, Record<string, string>> = {
  en: enTranslations,
  ms: msTranslations,
  ar: arTranslations,
  'zh-CN': zhCNTranslations,
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('preferredLanguage');
    return (saved as Language) || 'en';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
  }, []);

  // Instant translation function - no async, no API calls
  const t = useCallback((text: string): string => {
    if (language === 'en') {
      return text;
    }
    
    const translations = translationMap[language];
    return translations[text] || text;
  }, [language]);

  // Set document direction for RTL languages (Arabic)
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
