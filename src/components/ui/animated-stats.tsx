'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { ScrollAnimation } from './scroll-animation';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);

        // Easing function for smoother animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      updateCount();
    }
  }, [isInView, end, duration]);

  return (
    <span
      ref={ref}
      className="font-display text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
    >
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

interface StatItemProps {
  number: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

const StatItem = ({
  number,
  suffix,
  prefix,
  label,
  delay = 0,
}: StatItemProps) => (
  <ScrollAnimation direction="up" delay={delay} className="text-center">
    <div className="space-y-1 sm:space-y-2">
      <AnimatedCounter
        end={number}
        suffix={suffix}
        prefix={prefix}
        duration={2.5}
      />
      <p className="text-muted-foreground letter-spacing-wide text-xs uppercase sm:text-sm">
        {label}
      </p>
    </div>
  </ScrollAnimation>
);

export const AnimatedStats = () => {
  return (
    <section className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto">
        <ScrollAnimation direction="up" className="mb-12 text-center sm:mb-16">
          <h2 className="font-display letter-spacing-wider mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
            Números que Hablan
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg">
            Nuestra experiencia se refleja en cada proyecto entregado y cada
            cliente satisfecho.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          <StatItem
            number={150}
            suffix="+"
            label="Proyectos Completados"
            delay={0}
          />
          <StatItem
            number={98}
            suffix="%"
            label="Satisfacción del Cliente"
            delay={0.1}
          />
          <StatItem number={5} label="Años de Experiencia" delay={0.2} />
          <StatItem
            number={24}
            suffix="/7"
            label="Soporte Técnico"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
