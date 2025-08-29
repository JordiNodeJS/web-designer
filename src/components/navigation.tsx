'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ElvaNavLink } from '@/components/ui/elva-inspired';
import { SmoothTransform } from '@/components/ui/micro-animations';
import { Menu, X } from 'lucide-react';
import { CursorToggle } from '@/components/ui/cursor-toggle';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 border-border border-b backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo con efecto Elva */}
          <SmoothTransform transformOnHover={{ scale: 1.05 }}>
            <Link
              href="/"
              className="font-display letter-spacing-wide text-lg font-bold transition-opacity duration-400 hover:opacity-70 sm:text-xl"
            >
              Web Designer
            </Link>
          </SmoothTransform>

          {/* Navigation Links con estilo Elva - Desktop */}
          <div className="hidden items-center space-x-6 md:flex lg:space-x-8">
            <ElvaNavLink
              href="/servicios"
              className="letter-spacing-wide text-sm font-medium"
            >
              Servicios
            </ElvaNavLink>
            <ElvaNavLink
              href="/calculadora"
              className="letter-spacing-wide text-sm font-medium"
            >
              Calculadora
            </ElvaNavLink>
            <ElvaNavLink
              href="/contacto"
              className="letter-spacing-wide text-sm font-medium"
            >
              Contacto
            </ElvaNavLink>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <SmoothTransform transformOnHover={{ scale: 1.05, y: -1 }}>
              <Button asChild size="sm" className="letter-spacing-wide">
                <Link href="/contacto">Empezar Proyecto</Link>
              </Button>
            </SmoothTransform>
          </div>

          {/* Cursor toggle - desktop only */}
          <div className="hidden lg:block">
            <CursorToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-border mt-3 border-t pt-3 sm:mt-4 sm:pt-4 md:hidden">
            <div className="space-y-3 sm:space-y-4">
              <Link
                href="/servicios"
                className="letter-spacing-wide block py-1 text-sm font-medium transition-opacity hover:opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/calculadora"
                className="letter-spacing-wide block py-1 text-sm font-medium transition-opacity hover:opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Calculadora
              </Link>
              <Link
                href="/contacto"
                className="letter-spacing-wide block py-1 text-sm font-medium transition-opacity hover:opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="pt-2">
                <Button
                  asChild
                  size="sm"
                  className="letter-spacing-wide w-full"
                >
                  <Link
                    href="/contacto"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Empezar Proyecto
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
