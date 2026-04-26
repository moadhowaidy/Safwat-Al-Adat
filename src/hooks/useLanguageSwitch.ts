import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function useLanguageSwitch() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>(i18n.language as 'en' | 'ar' || 'ar');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const switchLang = useCallback((originElement: HTMLElement) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const rect = originElement.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = '#C9A227';
    overlay.style.zIndex = '9999';
    overlay.style.pointerEvents = 'none';
    
    // Initial clip path
    overlay.style.clipPath = `circle(0% at ${x}px ${y}px)`;
    overlay.style.transition = 'clip-path 1100ms cubic-bezier(0.7, 0, 0.3, 1), opacity 240ms ease-out 860ms';
    
    // Add SVG icon to overlay
    const svgWrapper = document.createElement('div');
    svgWrapper.style.position = 'absolute';
    svgWrapper.style.top = '50%';
    svgWrapper.style.left = '50%';
    svgWrapper.style.transform = 'translate(-50%, -50%) scale(0.8)';
    svgWrapper.style.opacity = '0';
    svgWrapper.style.transition = 'opacity 200ms ease-in 400ms, transform 400ms ease-out 400ms';
    svgWrapper.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1F1A12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22v-5"/>
        <path d="M10 14c-2 0-3-1-3-3s1-3 3-3 3 1 3 3"/>
        <path d="M14 14c2 0 3-1 3-3s-1-3-3-3-3 1-3 3"/>
        <path d="M9 7c-2 0-3-1-3-3s1-3 3-3 3 1 3 3"/>
        <path d="M15 7c2 0 3-1 3-3s-1-3-3-3-3 1-3 3"/>
        <path d="M12 17c-2 0-3-1-3-3s1-3 3-3 3 1 3 3"/>
        <path d="M12 17c2 0 3-1 3-3s-1-3-3-3-3 1-3 3"/>
      </svg>
    `;
    overlay.appendChild(svgWrapper);
    document.body.appendChild(overlay);

    // Trigger animation
    requestAnimationFrame(() => {
      overlay.style.clipPath = `circle(140% at ${x}px ${y}px)`;
      svgWrapper.style.opacity = '1';
      svgWrapper.style.transform = 'translate(-50%, -50%) scale(1)';
      
      // Swap language halfway
      setTimeout(() => {
        const nextLang = currentLang === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(nextLang);
        setCurrentLang(nextLang);
      }, 620);

      // Fade out
      setTimeout(() => {
        overlay.style.opacity = '0';
      }, 860);

      // Cleanup
      setTimeout(() => {
        document.body.removeChild(overlay);
        setIsAnimating(false);
      }, 1100);
    });

  }, [currentLang, i18n, isAnimating]);

  return { currentLang, switchLang, isAnimating };
}
