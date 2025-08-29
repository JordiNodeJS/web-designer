'use client';

import { useEffect } from 'react';
import { useCursorControl } from '@/components/cursor-context';

export const DevKeyListener = () => {
  const { showToggle, setShowToggle } = useCursorControl();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Alt+K toggles the visibility of the cursor toggle
      if (e.altKey && e.key.toLowerCase() === 'k') {
        if (!setShowToggle) return;
        setShowToggle(!Boolean(showToggle));
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [setShowToggle]);

  return null;
};
