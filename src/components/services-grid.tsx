'use client';

import { Service } from '@/types/services';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { HoverEffect } from '@/components/ui/hover-effect';
import Link from 'next/link';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <HoverEffect effect="lift" intensity="medium" className="h-full">
      <Card
        className={`h-full transition-all duration-300 ${
          featured ? 'ring-primary/20 bg-primary/5 ring-2' : ''
        }`}
      >
        <CardHeader className="pb-3 sm:pb-4">
          <div className="mb-2 flex items-center justify-between">
            <Badge
              variant={featured ? 'default' : 'secondary'}
              className="letter-spacing-wide text-xs"
            >
              {service.category.toUpperCase()}
            </Badge>
            {service.popular && (
              <Badge className="badge-contrast letter-spacing-wide text-xs">
                POPULAR
              </Badge>
            )}
          </div>
          <CardTitle className="font-display letter-spacing-wide text-lg sm:text-xl">
            {service.name}
          </CardTitle>
          <CardDescription className="text-xs leading-relaxed sm:text-sm">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3 sm:space-y-4">
          {/* Price and time */}
          <div className="space-y-1 border-b pb-3 sm:space-y-2 sm:pb-4">
            <div className="flex items-center justify-between">
              <span className="text-xs opacity-70 sm:text-sm">Desde</span>
              <span className="font-display text-lg font-bold sm:text-xl">
                €{service.price.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs opacity-70 sm:text-sm">
                Tiempo de entrega
              </span>
              <span className="text-xs font-medium sm:text-sm">
                {service.timeframe}
              </span>
            </div>
          </div>

          {/* Key features */}
          <div className="space-y-1 sm:space-y-2">
            <h4 className="text-xs font-medium opacity-70 sm:text-sm">
              Incluye:
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
              {service.features.length > 3 && (
                <li className="text-[10px] opacity-60 sm:text-xs">
                  +{service.features.length - 3} características más
                </li>
              )}
            </ul>
          </div>

          {/* Technologies */}
          <div className="border-t pt-3 sm:pt-4">
            <h4 className="mb-1 text-xs font-medium opacity-70 sm:mb-2 sm:text-sm">
              Tecnologías:
            </h4>
            <div className="flex flex-wrap gap-1">
              {service.technologies.slice(0, 4).map((tech: string) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-[10px] sm:text-xs"
                >
                  {tech}
                </Badge>
              ))}
              {service.technologies.length > 4 && (
                <Badge
                  variant="outline"
                  className="text-[10px] opacity-60 sm:text-xs"
                >
                  +{service.technologies.length - 4}
                </Badge>
              )}
            </div>
          </div>

          {/* Addons */}
          {service.addons && service.addons.length > 0 && (
            <div className="border-t pt-3 sm:pt-4">
              <h4 className="mb-1 text-xs font-medium opacity-70 sm:mb-2 sm:text-sm">
                Extras disponibles:
              </h4>
              <div className="flex flex-wrap gap-1">
                {service.addons.slice(0, 3).map(addon => (
                  <Badge
                    key={addon.name}
                    variant="secondary"
                    className="text-[10px] sm:text-xs"
                  >
                    {addon.name}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="space-y-2 pt-3 sm:pt-4">
            <Button
              asChild
              className="letter-spacing-wide w-full text-xs sm:text-sm"
              variant={featured ? 'default' : 'outline'}
              size="sm"
            >
              <Link href={`/calculadora?service=${service.id}`}>
                Calcular Presupuesto
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="letter-spacing-wide w-full text-[10px] sm:text-xs"
            >
              <Link href={`/servicios/${service.id}`}>Ver Detalles</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </HoverEffect>
  );
}

interface ServicesGridProps {
  services: Service[];
  title?: string;
  maxItems?: number;
}

export function ServicesGrid({ services, title, maxItems }: ServicesGridProps) {
  const displayServices = maxItems ? services.slice(0, maxItems) : services;

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto">
        {title && (
          <ScrollAnimation
            direction="up"
            className="mb-12 text-center sm:mb-16"
          >
            <h2 className="font-display letter-spacing-wider mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
              {title}
            </h2>
          </ScrollAnimation>
        )}

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service, index) => (
            <ScrollAnimation
              key={service.id}
              direction="up"
              delay={index * 0.1}
            >
              <ServiceCard service={service} featured={service.popular} />
            </ScrollAnimation>
          ))}
        </div>

        {maxItems && services.length > maxItems && (
          <ScrollAnimation
            direction="up"
            delay={0.3}
            className="mt-10 text-center sm:mt-12"
          >
            <HoverEffect effect="glow" intensity="medium">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="letter-spacing-wide w-full sm:w-auto"
              >
                <Link href="/servicios">Ver Todos los Servicios</Link>
              </Button>
            </HoverEffect>
          </ScrollAnimation>
        )}
      </div>
    </section>
  );
}
