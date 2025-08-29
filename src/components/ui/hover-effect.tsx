'use client';

import { motion } from 'framer-motion';
import { type FC, type ReactNode } from 'react';

interface HoverEffectProps {
  children: ReactNode;
  className?: string;
  effect?: 'scale' | 'lift' | 'glow' | 'tilt' | 'slide';
  intensity?: 'subtle' | 'medium' | 'strong';
}

const getHoverVariants = (effect: string, intensity: string) => {
  const intensityMap = {
    subtle: { scale: 1.02, y: -2, glow: 0.1, rotate: 1, x: 2 },
    medium: { scale: 1.05, y: -4, glow: 0.2, rotate: 2, x: 4 },
    strong: { scale: 1.1, y: -8, glow: 0.3, rotate: 3, x: 8 },
  };

  const values = intensityMap[intensity as keyof typeof intensityMap];
  const easing = [0.22, 1, 0.36, 1] as const;

  switch (effect) {
    case 'scale':
      return {
        scale: values.scale,
        transition: { duration: 0.2, ease: easing },
      };
    case 'lift':
      return {
        y: values.y,
        scale: 1.02,
        transition: { duration: 0.2, ease: easing },
      };
    case 'glow':
      return {
        scale: 1.02,
        filter: `brightness(${1 + values.glow})`,
        transition: { duration: 0.2, ease: easing },
      };
    case 'tilt':
      return {
        rotate: values.rotate,
        scale: 1.02,
        transition: { duration: 0.2, ease: easing },
      };
    case 'slide':
      return {
        x: values.x,
        transition: { duration: 0.2, ease: easing },
      };
    default:
      return {
        scale: values.scale,
        transition: { duration: 0.2, ease: easing },
      };
  }
};

export const HoverEffect: FC<HoverEffectProps> = ({
  children,
  className = '',
  effect = 'scale',
  intensity = 'medium',
}) => {
  return (
    <motion.div
      className={className}
      whileHover={getHoverVariants(effect, intensity)}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
};
