'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// Curvas de easing inspiradas en Elva
export const easings = {
  elva: [0.445, 0.05, 0.55, 0.95] as const,
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  subtle: [0.23, 1, 0.32, 1] as const,
};

// Timings específicos de Elva
export const timings = {
  quick: 0.4,
  normal: 0.5,
  lazy: 0.52,
  slow: 0.8,
};

interface FadeInImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export const FadeInImage: React.FC<FadeInImageProps> = ({
  src,
  alt,
  className = '',
  delay = 0,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: timings.normal,
                ease: easings.elva,
                delay,
              },
            }
          : {}
      }
    >
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={
          isLoaded
            ? {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: timings.slow,
                  ease: easings.smooth,
                },
              }
            : {}
        }
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
};

interface SmoothTransformProps {
  children: React.ReactNode;
  className?: string;
  transformOnHover?: {
    scale?: number;
    rotate?: number;
    y?: number;
    x?: number;
  };
  duration?: number;
}

export const SmoothTransform: React.FC<SmoothTransformProps> = ({
  children,
  className = '',
  transformOnHover = { scale: 1.05 },
  duration = timings.quick,
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        ...transformOnHover,
        transition: {
          duration,
          ease: easings.elva,
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.1,
          ease: easings.elva,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionVariants = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: directionVariants[direction],
            visible: {
              y: 0,
              x: 0,
              opacity: 1,
              transition: {
                duration: timings.normal,
                ease: easings.elva,
              },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

interface NumberCounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const NumberCounter: React.FC<NumberCounterProps> = ({
  from = 0,
  to,
  duration = timings.slow,
  className = '',
  prefix = '',
  suffix = '',
  decimals = 0,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const isInView = useInView(ref, { once: true });

  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    return springValue.onChange(v => {
      setDisplayValue(Number(v.toFixed(decimals)));
    });
  }, [springValue, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.02,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(' ');

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block"
          variants={{
            hidden: {
              y: 30,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: timings.normal,
                ease: easings.elva,
              },
            },
          }}
        >
          {word}
          {wordIndex < words.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
  delay?: number;
  distance?: number;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'left',
  className = '',
  delay = 0,
  distance = 50,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionConfig = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: -distance },
    down: { x: 0, y: distance },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        ...directionConfig[direction],
        opacity: 0,
      }}
      animate={
        isInView
          ? {
              x: 0,
              y: 0,
              opacity: 1,
              transition: {
                duration: timings.normal,
                ease: easings.elva,
                delay,
              },
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
};

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  magneticStrength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  magneticStrength = 0.3,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * magneticStrength;
    const deltaY = (e.clientY - centerY) * magneticStrength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};
