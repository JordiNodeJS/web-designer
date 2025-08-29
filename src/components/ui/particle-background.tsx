'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WaveBackgroundProps {
  className?: string;
}

function WaveLayer({
  delay = 0,
  color,
  opacity = 0.1,
}: {
  delay?: number;
  color: string;
  opacity?: number;
}) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 2 }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id={`gradient-${color.replace('#', '')}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={color} stopOpacity={opacity * 1.2} />
            <stop offset="50%" stopColor={color} stopOpacity={opacity} />
            <stop offset="100%" stopColor={color} stopOpacity={opacity * 0.6} />
          </linearGradient>
        </defs>

        <motion.path
          d="M0,400 Q300,300 600,400 T1200,400 L1200,600 Q900,500 600,600 T0,600 Z"
          fill={`url(#gradient-${color.replace('#', '')})`}
          initial={{
            d: 'M0,400 Q300,300 600,400 T1200,400 L1200,600 Q900,500 600,600 T0,600 Z',
          }}
          animate={{
            d: [
              'M0,400 Q300,300 600,400 T1200,400 L1200,600 Q900,500 600,600 T0,600 Z',
              'M0,350 Q300,450 600,350 T1200,350 L1200,650 Q900,550 600,650 T0,650 Z',
              'M0,420 Q300,320 600,420 T1200,420 L1200,580 Q900,480 600,580 T0,580 Z',
              'M0,400 Q300,300 600,400 T1200,400 L1200,600 Q900,500 600,600 T0,600 Z',
            ],
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.path
          d="M0,200 Q400,100 800,200 T1200,200 L1200,0 Q800,100 400,0 T0,0 Z"
          fill={`url(#gradient-${color.replace('#', '')})`}
          initial={{
            d: 'M0,200 Q400,100 800,200 T1200,200 L1200,0 Q800,100 400,0 T0,0 Z',
          }}
          animate={{
            d: [
              'M0,200 Q400,100 800,200 T1200,200 L1200,0 Q800,100 400,0 T0,0 Z',
              'M0,150 Q400,250 800,150 T1200,150 L1200,0 Q800,150 400,0 T0,0 Z',
              'M0,220 Q400,120 800,220 T1200,220 L1200,0 Q800,80 400,0 T0,0 Z',
              'M0,200 Q400,100 800,200 T1200,200 L1200,0 Q800,100 400,0 T0,0 Z',
            ],
          }}
          transition={{
            duration: 6,
            delay: delay + 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </motion.div>
  );
}

export function ParticleBackground({ className = '' }: WaveBackgroundProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      {/* Multiple wave layers with different colors and timings */}
      <WaveLayer delay={0} color="#3b82f6" opacity={0.08} />
      <WaveLayer delay={2} color="#8b5cf6" opacity={0.06} />
      <WaveLayer delay={4} color="#06b6d4" opacity={0.05} />
      <WaveLayer delay={1} color="#10b981" opacity={0.04} />

      {/* Subtle overlay gradient */}
      <div className="to-background/20 absolute inset-0 bg-gradient-to-b from-transparent via-transparent" />
    </div>
  );
}
