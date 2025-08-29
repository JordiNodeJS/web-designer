'use client';

import { AnimatedText } from '@/components/ui/animated-text';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { HoverEffect } from '@/components/ui/hover-effect';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AnimationDemoPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="container mx-auto max-w-4xl space-y-20">
        {/* Animated Text Demo */}
        <section className="space-y-8">
          <h1 className="text-center text-3xl font-bold">
            Demostración de Animaciones
          </h1>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Texto Animado con Iconos</h2>
            <AnimatedText
              text="creamos experiencias digitales memorables"
              className="text-2xl font-bold"
              iconVariant="creative"
              showIcons={false}
            />

            <AnimatedText
              text="desarrollo moderno y diseño innovador"
              className="text-xl"
              iconVariant="development"
              showIcons={false}
            />

            <AnimatedText
              text="diseño visual y experiencia de usuario"
              className="text-xl"
              iconVariant="design"
              showIcons={false}
            />
          </div>
        </section>

        {/* Scroll Animations Demo */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Animaciones de Scroll</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ScrollAnimation direction="up" delay={0}>
              <Card>
                <CardHeader>
                  <CardTitle>Desde Abajo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Esta carta aparece desde abajo cuando haces scroll.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="down" delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>Desde Arriba</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Esta carta aparece desde arriba con un ligero delay.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="left" delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Desde la Izquierda</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Esta carta se desliza desde la izquierda.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle>Desde la Derecha</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Esta carta se desliza desde la derecha.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </section>

        {/* Hover Effects Demo */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Efectos Hover</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <HoverEffect effect="scale" intensity="medium">
              <Button className="w-full">Scale Effect</Button>
            </HoverEffect>

            <HoverEffect effect="lift" intensity="medium">
              <Button variant="outline" className="w-full">
                Lift Effect
              </Button>
            </HoverEffect>

            <HoverEffect effect="glow" intensity="medium">
              <Button variant="secondary" className="w-full">
                Glow Effect
              </Button>
            </HoverEffect>

            <HoverEffect effect="tilt" intensity="medium">
              <Button variant="destructive" className="w-full">
                Tilt Effect
              </Button>
            </HoverEffect>

            <HoverEffect effect="slide" intensity="medium">
              <Button variant="ghost" className="w-full">
                Slide Effect
              </Button>
            </HoverEffect>

            <HoverEffect effect="scale" intensity="strong">
              <Button variant="default" className="w-full">
                Strong Scale
              </Button>
            </HoverEffect>
          </div>
        </section>

        {/* Combined Effects Demo */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Efectos Combinados</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ScrollAnimation direction="up" delay={0}>
              <HoverEffect effect="lift" intensity="medium">
                <Card className="cursor-pointer">
                  <CardHeader>
                    <CardTitle>Scroll + Hover</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Aparece con scroll y responde al hover con efecto lift.
                    </p>
                  </CardContent>
                </Card>
              </HoverEffect>
            </ScrollAnimation>

            <ScrollAnimation direction="left" delay={0.2}>
              <HoverEffect effect="glow" intensity="medium">
                <Card className="cursor-pointer">
                  <CardHeader>
                    <CardTitle>Scroll + Glow</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Se desliza desde la izquierda y brilla al hacer hover.
                    </p>
                  </CardContent>
                </Card>
              </HoverEffect>
            </ScrollAnimation>
          </div>
        </section>

        {/* Typography with Effects */}
        <section className="space-y-8">
          <ScrollAnimation direction="fade" delay={0}>
            <h2 className="text-center text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Tipografía con Efectos
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <AnimatedText
                text="innovación tecnológica"
                className="text-gradient text-3xl leading-tight font-bold tracking-tight"
                iconVariant="development"
                showIcons={false}
              />

              <p className="text-muted-foreground mx-auto max-w-prose text-lg">
                Combinamos las últimas tecnologías con diseño creativo para
                crear experiencias digitales que destacan y convierten.
              </p>
            </div>
          </ScrollAnimation>
        </section>
      </div>
    </div>
  );
}
