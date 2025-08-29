'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursorConfig } from '@/components/cursor-context';

export const CustomCursor = () => {
  const { hoverScale, enabled } = useCursorConfig();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    // Detect coarse pointer (touch) to disable custom cursor on mobiles
    const mql = window.matchMedia('(pointer: coarse)');
    setIsCoarsePointer(mql.matches);
    const listener = (e: MediaQueryListEvent) => setIsCoarsePointer(e.matches);
    // Older browsers use addListener
    if (mql.addEventListener) mql.addEventListener('change', listener);
    else mql.addListener(listener);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', listener);
      else mql.removeListener(listener);
    };
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerOver = (e: Event) => {
      const target = e.target as Element | null;
      if (!target) return;
      if (
        target.closest('a, button, [role="button"], [data-cursor-interactive]')
      ) {
        setIsHovering(true);
      }
    };

    const handlePointerOut = (e: Event) => {
      const target = e.target as Element | null;
      if (!target) return;
      if (
        target.closest('a, button, [role="button"], [data-cursor-interactive]')
      ) {
        setIsHovering(false);
      }
    };

    if (!enabled || isCoarsePointer) return;

    // Track mouse movement and use delegated pointer events so dynamic elements are detected
    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
    };
  }, [enabled, isCoarsePointer]);

  // If disabled or on coarse pointer devices, render nothing
  if (!enabled || isCoarsePointer) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        data-custom-cursor="main"
        className="bg-primary pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? hoverScale : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      />

      {/* Trailing circle */}
      <motion.div
        data-custom-cursor="trail"
        className="border-primary/30 pointer-events-none fixed top-0 left-0 z-40 h-8 w-8 rounded-full border"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? hoverScale * 1.25 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20,
        }}
      />
    </>
  );
};
