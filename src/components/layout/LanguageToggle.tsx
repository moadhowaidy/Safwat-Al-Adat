import { useRef } from 'react';
import { useLanguageSwitch } from '../../hooks/useLanguageSwitch';

export default function LanguageToggle() {
  const { currentLang, switchLang, isAnimating } = useLanguageSwitch();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    if (buttonRef.current) {
      switchLang(buttonRef.current);
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      disabled={isAnimating}
      className="relative flex items-center w-14 h-8 rounded-full border border-brand-gold bg-brand-bone overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
      aria-label="Toggle language"
    >
      <div
        className={`absolute top-0 bottom-0 w-1/2 bg-brand-gold transition-all duration-300 ease-in-out ${
          currentLang === 'ar' ? 'start-0' : 'start-1/2'
        }`}
      />
      <span className={`relative z-10 flex-1 text-center text-sm font-medium ${currentLang === 'ar' ? 'text-brand-charcoal' : 'text-brand-taupe'}`}>
        ع
      </span>
      <span className={`relative z-10 flex-1 text-center text-sm font-medium ${currentLang === 'en' ? 'text-brand-charcoal' : 'text-brand-taupe'}`}>
        EN
      </span>
    </button>
  );
}
