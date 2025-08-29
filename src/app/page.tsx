import { HeroSection } from '@/components/hero-section';
import { ServicesGrid } from '@/components/services-grid';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/ui/page-transition';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { AnimatedStats } from '@/components/ui/animated-stats';
import { ParticleBackground } from '@/components/ui/particle-background';
import { getPopularServices } from '@/lib/services-data';

export default function HomePage() {
  const popularServices = getPopularServices();

  return (
    <PageTransition>
      <ParticleBackground />
      <main className="relative z-10 min-h-screen">
        <Navigation />
        <HeroSection />

        {/* Featured Project Section - Inspired by Elva */}
        <section className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
              <ScrollAnimation
                direction="left"
                className="space-y-4 sm:space-y-6"
              >
                <p className="font-display letter-spacing-wider text-muted-foreground text-xs sm:text-sm">
                  PROYECTO DESTACADO
                </p>
                <h2 className="font-display letter-spacing-wide text-2xl font-bold sm:text-3xl md:text-4xl">
                  E-commerce Moderno con IA
                </h2>
                <p className="text-base leading-relaxed sm:text-lg">
                  Desarrollo completo de tienda online con sistema de
                  recomendaciones inteligente y experiencia de usuario
                  optimizada para conversiones.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Estrategia', 'Desarrollo', 'UX', 'UI', 'IA'].map(tag => (
                    <span
                      key={tag}
                      className="bg-background letter-spacing-wide rounded-full px-3 py-1 text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right" delay={0.2}>
                <div className="from-primary/10 to-primary/20 flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br">
                  <p className="text-muted-foreground letter-spacing-wide px-4 text-center text-xs sm:text-sm">
                    [ IMAGEN DEL PROYECTO ]
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <ServicesGrid services={popularServices} title="Servicios Populares" />

        {/* Animated Stats */}
        <AnimatedStats />

        {/* Work Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="container mx-auto">
            <h2 className="font-display letter-spacing-wider mb-12 text-center text-2xl font-bold sm:mb-16 sm:text-3xl md:text-4xl">
              Nuestros Trabajos
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                'Landing Page Premium',
                'E-commerce Fashion',
                'Portfolio Creativo',
                'Web Inmobiliaria',
                'Plataforma Cursos',
                'Microsite Campaña',
              ].map(project => (
                <div key={project} className="group cursor-pointer">
                  <div className="from-muted to-muted/50 group-hover:from-primary/10 group-hover:to-primary/20 mb-3 flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br transition-all duration-300 sm:mb-4">
                    <p className="text-muted-foreground letter-spacing-wide px-4 text-center text-xs sm:text-sm">
                      [ {project.toUpperCase()} ]
                    </p>
                  </div>
                  <h3 className="font-display letter-spacing-wide mb-1 text-sm font-bold sm:mb-2 sm:text-base">
                    {project}
                  </h3>
                  <p className="text-muted-foreground letter-spacing-wide text-xs sm:text-sm">
                    Diseño, UX, UI, Desarrollo
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2">
              <div>
                <h2 className="font-display letter-spacing-wider mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl md:text-4xl">
                  <span className="block">Part</span>
                  <span className="block">ners</span>
                </h2>
              </div>
              <div>
                <p className="mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg">
                  Colaboramos estrechamente con marcas líderes en la industria
                  para entregar experiencias de alto rendimiento e impacto para
                  sus clientes, marca y negocio.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm leading-relaxed">
                      Creamos soluciones web innovadoras que integran las
                      últimas tecnologías con diseño elegante y funcionalidad
                      excepcional.
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Una experiencia que combina estrategia digital con
                      excelencia técnica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
}
