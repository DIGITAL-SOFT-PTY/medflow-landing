import { useState, useEffect } from 'react';

const BANNER_KEY = 'medflow_banner_dismissed';

export function useBanner() {
  const [showBanner, setShowBanner] = useState(() => {
    try {
      return localStorage.getItem(BANNER_KEY) !== 'true';
    } catch {
      return true;
    }
  });

  const dismissBanner = () => {
    setShowBanner(false);
    try {
      localStorage.setItem(BANNER_KEY, 'true');
    } catch {
      // localStorage not available (e.g. private mode with storage blocked)
    }
  };

  return { showBanner, dismissBanner };
}
