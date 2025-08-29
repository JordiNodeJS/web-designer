'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { HoverEffect } from '@/components/ui/hover-effect';
import { StaggerContainer } from '@/components/ui/micro-animations';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative flex min-h-screen items-center justify-center px-4 sm:px-6">
        <div className="from-background via-background to-primary/5 absolute inset-0 bg-gradient-to-br" />
        <div className="relative z-10 container mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="font-display text-3xl leading-tight font-bold sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              creamos experiencias digitales memorables
            </h1>
            <div className="space-y-3 sm:space-y-4">
              <p className="font-display letter-spacing-wider text-xs opacity-70 sm:text-sm">
                HOLA
              </p>
              <div className="mx-auto max-w-4xl space-y-1 sm:space-y-2">
                <p className="letter-spacing-wide text-xs font-medium sm:text-sm md:text-base">
                  SOMOS WEB DESIGNER, UN ESTUDIO CREANDO
                </p>
                <p className="letter-spacing-wide text-xs font-medium sm:text-sm md:text-base">
                  EXPERIENCIAS E-COMMERCE Y WEB MEMORABLES,
                </p>
                <p className="letter-spacing-wide text-xs font-medium sm:text-sm md:text-base">
                  ESPECIALIZADOS EN ESTRATEGIA DIGITAL, UX, UI,
                </p>
                <p className="letter-spacing-wide text-xs font-medium sm:text-sm md:text-base">
                  Y DESARROLLO MODERNO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Gradient background */}
      <div className="from-background via-background to-primary/5 absolute inset-0 bg-gradient-to-br" />

      <div className="relative z-10 container mx-auto text-center">
        <StaggerContainer className="space-y-6 sm:space-y-8">
          {/* Main heading mejorado para legibilidad y responsividad */}
          <h1 className="font-display text-3xl leading-tight font-bold sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
            creamos experiencias digitales memorables
          </h1>

          {/* Subtitle con animación letra por letra */}
          <div className="space-y-3 sm:space-y-4">
            <p className="font-display letter-spacing-wider text-xs opacity-70 sm:text-sm">
              HOLA
            </p>

            <div className="mx-auto max-w-4xl space-y-1 sm:space-y-2">
              <p className="letter-spacing-wide text-xs font-medium sm:text-sm md:text-base">
                SOMOS WEB DESIGNER, UN ESTUDIO CREANDO
              </p>
              <p className="letter-spacing-wide text-xs font-medium sm:text-sm md:text-base">
                EXPERIENCIAS E-COMMERCE Y WEB MEMORABLES,
              </p>
              <p className="letter-spacing-wide text-xs font-medium sm:text-sm md:text-base">
                ESPECIALIZADOS EN ESTRATEGIA DIGITAL, UX, UI,
              </p>
              <p className="letter-spacing-wide text-xs font-medium sm:text-sm md:text-base">
                Y DESARROLLO MODERNO.
              </p>
            </div>
          </div>

          {/* CTA Buttons con efectos mejorados y responsividad */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <HoverEffect effect="lift" intensity="strong">
              <Button
                asChild
                size="lg"
                className="letter-spacing-wide group relative w-full overflow-hidden sm:w-auto"
              >
                <Link
                  href="/calculadora"
                  className="flex items-center justify-center gap-2"
                >
                  Calcular Presupuesto
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </HoverEffect>

            <HoverEffect effect="glow" intensity="medium">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="letter-spacing-wide w-full sm:w-auto"
              >
                <Link href="/demo">Ver Demo</Link>
              </Button>
            </HoverEffect>
          </div>

          {/* Stats section inspirado en Elva con mejor responsividad */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 md:grid-cols-4 md:gap-8 lg:mt-20">
            <div className="text-center">
              <div className="font-display text-xl font-bold sm:text-2xl md:text-3xl">
                50+
              </div>
              <div className="letter-spacing-wide text-[10px] opacity-60 sm:text-xs">
                PROYECTOS COMPLETADOS
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-xl font-bold sm:text-2xl md:text-3xl">
                3
              </div>
              <div className="letter-spacing-wide text-[10px] opacity-60 sm:text-xs">
                AÑOS DE EXPERIENCIA
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-xl font-bold sm:text-2xl md:text-3xl">
                24h
              </div>
              <div className="letter-spacing-wide text-[10px] opacity-60 sm:text-xs">
                TIEMPO DE RESPUESTA
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-xl font-bold sm:text-2xl md:text-3xl">
                100%
              </div>
              <div className="letter-spacing-wide text-[10px] opacity-60 sm:text-xs">
                SATISFACCIÓN
              </div>
            </div>
          </div>

          {/* Scroll indicator inspirado en Elva - solo en desktop */}
          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:bottom-8 sm:block">
            <div className="flex flex-col items-center gap-2">
              <div className="letter-spacing-wider text-xs opacity-40">
                SCROLL
              </div>
              <div className="h-6 w-px bg-gradient-to-b from-current to-transparent opacity-40 sm:h-8" />
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
