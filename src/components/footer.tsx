'use client';

import Link from 'next/link';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { HoverEffect } from '@/components/ui/hover-effect';
import { AnimatedText } from '@/components/ui/animated-text';
import { CursorToggle } from '@/components/ui/cursor-toggle';
import { ClientOnlyCursorToggle } from '@/components/ui/client-only-cursor-toggle';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto">
        {/* Call to action section */}
        <ScrollAnimation direction="up" className="mb-12 text-center sm:mb-16">
          <h2 className="font-display letter-spacing-wider mb-3 text-xl font-bold sm:mb-4 sm:text-2xl md:text-3xl">
            Nos encanta trabajar con personas y marcas apasionadas.
          </h2>
          <p className="letter-spacing-wide mb-6 text-base sm:mb-8 sm:text-lg">
            Colaboremos juntos.
          </p>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-base font-medium sm:text-lg">
              <HoverEffect effect="glow" intensity="subtle">
                <a
                  href="mailto:info@webdesigner.com"
                  className="letter-spacing-wide break-all transition-opacity hover:opacity-70 sm:break-normal"
                >
                  info@webdesigner.com
                </a>
              </HoverEffect>
            </div>
            <p className="letter-spacing-wide text-sm sm:text-base">
              +34 612 345 678
            </p>
          </div>
        </ScrollAnimation>

        {/* Logo section */}
        <ScrollAnimation
          direction="up"
          delay={0.2}
          className="mb-12 text-center sm:mb-16"
        >
          <AnimatedText
            text="Web Designer"
            className="font-display text-3xl font-bold sm:text-4xl md:text-5xl"
            iconVariant="design"
          />
        </ScrollAnimation>

        {/* Navigation and social links */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:mb-16 sm:gap-8 md:grid-cols-2">
          {/* Navigation Links */}
          <div>
            <h3 className="font-display letter-spacing-wide mb-3 text-sm font-medium opacity-70 sm:mb-4">
              NAVEGACIÓN
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/servicios"
                  className="letter-spacing-wide text-sm transition-opacity hover:opacity-70"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/calculadora"
                  className="letter-spacing-wide text-sm transition-opacity hover:opacity-70"
                >
                  Calculadora
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="letter-spacing-wide text-sm transition-opacity hover:opacity-70"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="letter-spacing-wide text-sm transition-opacity hover:opacity-70"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-display letter-spacing-wide mb-3 text-sm font-medium opacity-70 sm:mb-4">
              SÍGUENOS
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a
                  href="https://linkedin.com/company/webdesigner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="letter-spacing-wide text-sm transition-opacity hover:opacity-70"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/webdesigner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="letter-spacing-wide text-sm transition-opacity hover:opacity-70"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/webdesigner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="letter-spacing-wide text-sm transition-opacity hover:opacity-70"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/webdesigner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="letter-spacing-wide text-sm transition-opacity hover:opacity-70"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and legal */}
        <div className="border-primary-foreground/20 border-t pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-xs sm:text-sm md:flex-row md:space-y-0">
            <p className="letter-spacing-wide">© 2025 Web Designer</p>
            <div className="flex flex-col space-y-2 text-center sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-6">
              <Link
                href="/privacidad"
                className="letter-spacing-wide transition-opacity hover:opacity-70"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/cookies"
                className="letter-spacing-wide transition-opacity hover:opacity-70"
              >
                Política de Cookies
              </Link>
              <Link
                href="/terminos"
                className="letter-spacing-wide transition-opacity hover:opacity-70"
              >
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
        {/* Cursor toggle placed in footer (visible only when dev toggle is enabled) */}
        <ClientOnlyCursorToggle />
      </div>
    </footer>
  );
}
