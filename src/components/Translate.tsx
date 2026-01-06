import { memo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TranslateProps {
  children: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

// Simple translation component - uses static translations, instant render
const Translate = memo(({ children, className, as: Component = 'span' }: TranslateProps) => {
  const { t } = useLanguage();
  
  // Instant translation - no loading state needed
  const translatedText = t(children);

  return (
    <Component className={className}>
      {translatedText}
    </Component>
  );
});

Translate.displayName = 'Translate';

export default Translate;
