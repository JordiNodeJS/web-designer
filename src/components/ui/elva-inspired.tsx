'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadeInImage, easings, timings } from './micro-animations';

interface ElvaTextProps {
  children: string;
  className?: string;
  withImages?: {
    src: string;
    alt: string;
    position: number; // Posición del carácter después del cual insertar la imagen
  }[];
  delay?: number;
  stagger?: number;
}

export function ElvaText({
  children,
  className = '',
  withImages = [],
  delay = 0,
  stagger = 0.03,
}: ElvaTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Crear array de elementos (letras e imágenes)
  const elements: (string | { type: 'image'; src: string; alt: string })[] = [];
  let charIndex = 0;

  for (let i = 0; i < children.length; i++) {
    const char = children[i];
    elements.push(char);
    charIndex++;

    // Verificar si hay una imagen que insertar después de este carácter
    const imageAtPosition = withImages.find(img => img.position === charIndex);
    if (imageAtPosition) {
      elements.push({
        type: 'image',
        src: imageAtPosition.src,
        alt: imageAtPosition.alt,
      });
    }
  }

  return (
    <h1 ref={ref} className={className}>
      {elements.map((element, index) => {
        if (typeof element === 'string') {
          return (
            <motion.span
              key={`char-${index}`}
              initial={{ opacity: 0, y: 30, rotateX: 90 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }
                  : {
                      opacity: 0,
                      y: 30,
                      rotateX: 90,
                    }
              }
              transition={{
                duration: timings.normal,
                ease: easings.elva,
                delay: delay + index * stagger,
              }}
              style={{
                display: 'inline-block',
                transformOrigin: 'center bottom',
              }}
            >
              {element === ' ' ? '\u00A0' : element}
            </motion.span>
          );
        } else {
          // Es una imagen
          return (
            <motion.span
              key={`img-${index}`}
              initial={{ opacity: 0, scale: 0, rotate: 180 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0,
                      rotate: 180,
                    }
              }
              transition={{
                duration: timings.slow,
                ease: easings.bounce,
                delay: delay + index * stagger + 0.2,
              }}
              className="mx-1 inline-block align-middle"
            >
              <FadeInImage
                src={element.src}
                alt={element.alt}
                className="border-primary/20 h-8 w-8 rounded-full border-2 object-cover md:h-12 md:w-12"
                delay={delay + index * stagger + 0.3}
              />
            </motion.span>
          );
        }
      })}
    </h1>
  );
}

interface ElvaServiceCardProps {
  title: string;
  description: string;
  category: string;
  popular?: boolean;
  className?: string;
}

export function ElvaServiceCard({
  title,
  description,
  category,
  popular = false,
  className = '',
}: ElvaServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={`group ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: timings.normal,
        ease: easings.elva,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
    >
      <div className="bg-card border-border/50 relative h-full overflow-hidden rounded-xl border p-6">
        {/* Efecto de glow sutil */}
        <motion.div
          className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: timings.quick, ease: easings.elva }}
        />

        {/* Badge animado */}
        <motion.div
          className="mb-4 flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{
            duration: timings.normal,
            ease: easings.elva,
            delay: 0.1,
          }}
        >
          <motion.span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              popular
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: timings.quick, ease: easings.elva }}
          >
            {category.toUpperCase()}
          </motion.span>
          {popular && (
            <motion.span
              className="bg-accent text-accent-foreground rounded-full px-2 py-1 text-xs font-medium"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                duration: timings.normal,
                ease: easings.bounce,
                delay: 0.3,
              }}
            >
              POPULAR
            </motion.span>
          )}
        </motion.div>

        {/* Título con efecto letra por letra */}
        <motion.h3
          className="mb-3 overflow-hidden text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: timings.quick, delay: 0.2 }}
        >
          {title.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: timings.normal,
                ease: easings.elva,
                delay: 0.2 + index * 0.02,
              }}
              style={{ display: 'inline-block' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h3>

        {/* Descripción con fade-in */}
        <motion.p
          className="text-muted-foreground text-sm leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: timings.normal,
            ease: easings.elva,
            delay: 0.4,
          }}
        >
          {description}
        </motion.p>

        {/* Línea decorativa animada */}
        <motion.div
          className="from-primary absolute bottom-0 left-0 h-0.5 bg-gradient-to-r to-transparent"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: timings.normal, ease: easings.elva }}
        />

        {/* Efecto de brillo en hover */}
        <motion.div
          className="pointer-events-none absolute top-0 left-0 h-full w-full"
          initial={{ background: 'transparent' }}
          whileHover={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          }}
          transition={{ duration: timings.lazy, ease: easings.elva }}
        />
      </div>
    </motion.div>
  );
}

interface ElvaNavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ElvaNavLink({
  href,
  children,
  className = '',
}: ElvaNavLinkProps) {
  return (
    <motion.a
      href={href}
      className={`relative ${className}`}
      whileHover={{
        opacity: 0.7,
      }}
      transition={{
        duration: timings.normal,
        ease: easings.elva,
      }}
    >
      {children}

      {/* Línea decorativa inferior */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-current"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{
          duration: timings.normal,
          ease: easings.elva,
        }}
      />
    </motion.a>
  );
}
