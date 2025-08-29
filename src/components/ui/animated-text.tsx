'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Star, Sparkles, Code, Palette } from 'lucide-react';
import type { FC } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  iconVariant?: 'design' | 'development' | 'creative';
  showIcons?: boolean;
}

const iconMap = {
  design: [Heart, Palette, Star],
  development: [Code, Zap, Sparkles],
  creative: [Star, Sparkles, Heart],
};

export const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  className = '',
  iconVariant = 'creative',
  showIcons = true,
}) => {
  const words = text.split(' ');
  const icons = showIcons ? iconMap[iconVariant] : [];
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  return (
    <div
      className={`flex flex-wrap gap-x-2 gap-y-1 sm:gap-x-4 sm:gap-y-2 ${className}`}
    >
      {words.map((word, wordIndex) => {
        const letters = word.split('');

        return (
          <motion.span
            key={wordIndex}
            className="flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: wordIndex * 0.1,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {letters.map((letter, letterIndex) => {
              let shouldShowIcon = false;
              let IconComponent: typeof Heart | undefined = undefined;

              if (clientReady && letter !== ' ') {
                if (showIcons) {
                  shouldShowIcon = Math.random() > 0.7;
                  IconComponent =
                    icons[Math.floor(Math.random() * icons.length)];
                }
              }

              return (
                <span key={letterIndex} className="relative inline-block">
                  <motion.span
                    className="inline-block"
                    whileHover={{
                      scale: 1.1,
                      color: 'hsl(var(--primary))',
                      transition: { duration: 0.2 },
                    }}
                  >
                    {letter}
                  </motion.span>

                  {shouldShowIcon && IconComponent && (
                    <motion.div
                      className="text-primary absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{
                        opacity: 1,
                        scale: 0.3,
                        rotate: 0,
                      }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.05 + 0.3,
                        duration: 0.5,
                        ease: [0.68, -0.55, 0.265, 1.55],
                      }}
                      whileHover={{
                        scale: 0.5,
                        rotate: 15,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <IconComponent className="h-2 w-2 sm:h-3 sm:w-3" />
                    </motion.div>
                  )}
                </span>
              );
            })}
          </motion.span>
        );
      })}
    </div>
  );
};
