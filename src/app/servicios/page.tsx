import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { getServicesByCategory } from '@/lib/services-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  const webServices = getServicesByCategory('web');
  const ecommerceServices = getServicesByCategory('ecommerce');
  const appServices = getServicesByCategory('app');
  const marketingServices = getServicesByCategory('marketing');

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
        <div className="container mx-auto text-center">
          <h1 className="font-display letter-spacing-wider mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl">
            <span className="block">Nuestros</span>
            <span className="block">Servicios</span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-6 max-w-3xl text-base sm:mb-8 sm:text-lg">
            Ofrecemos una gama completa de servicios de desarrollo web y
            digital, desde landing pages hasta e-commerce complejos. Cada
            proyecto se adapta a las necesidades específicas de tu negocio.
          </p>
          <Button
            asChild
            size="lg"
            className="letter-spacing-wide w-full sm:w-auto"
          >
            <Link href="/calculadora">Calcular Presupuesto</Link>
          </Button>
        </div>
      </section>

      {/* Services by Category */}
      <section className="pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Web Services */}
          {webServices.length > 0 && (
            <div className="mb-16 sm:mb-20">
              <h2 className="font-display letter-spacing-wider mb-3 text-center text-2xl font-bold sm:mb-4 sm:text-3xl">
                Desarrollo Web
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-center text-sm sm:mb-12 sm:text-base">
                Sitios web profesionales que convierten visitantes en clientes
              </p>
              <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {webServices.map(service => (
                  <div key={service.id} className="space-y-3 sm:space-y-4">
                    <div className="from-primary/10 to-primary/20 flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br">
                      <p className="text-muted-foreground letter-spacing-wide">
                        [ {service.name.toUpperCase()} ]
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display letter-spacing-wide mb-2 font-bold">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {service.description}
                      </p>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-xl font-bold">
                          €{service.price.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {service.timeframe}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button asChild size="sm" className="flex-1">
                          <Link href={`/calculadora?service=${service.id}`}>
                            Calcular
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <Link href={`/servicios/${service.id}`}>
                            Detalles
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* E-commerce Services */}
          {ecommerceServices.length > 0 && (
            <div className="mb-20">
              <h2 className="font-display letter-spacing-wider mb-4 text-center text-3xl font-bold">
                E-commerce
              </h2>
              <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
                Tiendas online que maximizan tus ventas
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {ecommerceServices.map(service => (
                  <div key={service.id} className="space-y-4">
                    <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/20">
                      <p className="text-muted-foreground letter-spacing-wide">
                        [ {service.name.toUpperCase()} ]
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display letter-spacing-wide mb-2 font-bold">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {service.description}
                      </p>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-xl font-bold">
                          €{service.price.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {service.timeframe}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button asChild size="sm" className="flex-1">
                          <Link href={`/calculadora?service=${service.id}`}>
                            Calcular
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <Link href={`/servicios/${service.id}`}>
                            Detalles
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* App Services */}
          {appServices.length > 0 && (
            <div className="mb-20">
              <h2 className="font-display letter-spacing-wider mb-4 text-center text-3xl font-bold">
                Aplicaciones
              </h2>
              <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
                Plataformas y aplicaciones web avanzadas
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {appServices.map(service => (
                  <div key={service.id} className="space-y-4">
                    <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-500/20">
                      <p className="text-muted-foreground letter-spacing-wide">
                        [ {service.name.toUpperCase()} ]
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display letter-spacing-wide mb-2 font-bold">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {service.description}
                      </p>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-xl font-bold">
                          €{service.price.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {service.timeframe}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button asChild size="sm" className="flex-1">
                          <Link href={`/calculadora?service=${service.id}`}>
                            Calcular
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <Link href={`/servicios/${service.id}`}>
                            Detalles
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Marketing Services */}
          {marketingServices.length > 0 && (
            <div className="mb-20">
              <h2 className="font-display letter-spacing-wider mb-4 text-center text-3xl font-bold">
                Marketing Digital
              </h2>
              <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
                Campañas y microsites para impulsar tu marca
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {marketingServices.map(service => (
                  <div key={service.id} className="space-y-4">
                    <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-500/20">
                      <p className="text-muted-foreground letter-spacing-wide">
                        [ {service.name.toUpperCase()} ]
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display letter-spacing-wide mb-2 font-bold">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {service.description}
                      </p>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-xl font-bold">
                          €{service.price.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {service.timeframe}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button asChild size="sm" className="flex-1">
                          <Link href={`/calculadora?service=${service.id}`}>
                            Calcular
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <Link href={`/servicios/${service.id}`}>
                            Detalles
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground px-6 py-20">
        <div className="container mx-auto text-center">
          <h2 className="font-display letter-spacing-wider mb-6 text-3xl font-bold md:text-4xl">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Creamos soluciones personalizadas para cada cliente. Cuéntanos tu
            proyecto y te haremos una propuesta a medida.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="letter-spacing-wide"
            >
              <Link href="/contacto">Contactar Ahora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="letter-spacing-wide border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/calculadora">Ver Calculadora</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
