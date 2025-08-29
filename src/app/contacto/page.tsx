import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="px-6 pt-24 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="font-display letter-spacing-wider mb-6 text-4xl font-bold md:text-5xl">
            <span className="block">Hablemos de</span>
            <span className="block">tu Proyecto</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Nos encanta trabajar con personas y marcas apasionadas. Cuéntanos tu
            idea y colaboremos juntos para crear algo memorable.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="font-display letter-spacing-wide text-2xl">
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription>
                  Completa el formulario y te responderemos en menos de 24h
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" placeholder="+34 600 000 000" />
                    </div>
                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" placeholder="Nombre de tu empresa" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Tipo de Servicio</Label>
                    <select
                      id="service"
                      className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="landing">Landing Page</option>
                      <option value="portfolio">Portfolio Personal</option>
                      <option value="business">Web de Negocio</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="events">Web de Eventos</option>
                      <option value="real-estate">Web Inmobiliaria</option>
                      <option value="membership">
                        Plataforma de Membresía
                      </option>
                      <option value="microsite">Microsite</option>
                      <option value="one-page">Web One Page</option>
                      <option value="custom">Proyecto Personalizado</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Presupuesto Estimado</Label>
                    <select
                      id="budget"
                      className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="500-1000">€500 - €1.000</option>
                      <option value="1000-2000">€1.000 - €2.000</option>
                      <option value="2000-5000">€2.000 - €5.000</option>
                      <option value="5000+">€5.000+</option>
                      <option value="to-discuss">A consultar</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos sobre tu proyecto, objetivos, timeline y cualquier detalle que consideres importante..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="letter-spacing-wide w-full"
                  >
                    Enviar Mensaje
                  </Button>

                  <p className="text-muted-foreground text-center text-xs">
                    Al enviar este formulario aceptas nuestra política de
                    privacidad
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card className="p-8">
                <h3 className="font-display letter-spacing-wide mb-6 text-xl font-bold">
                  Contacto Directo
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="letter-spacing-wide mb-1 font-medium">
                      Email
                    </p>
                    <a
                      href="mailto:info@webdesigner.com"
                      className="text-lg transition-opacity hover:opacity-70"
                    >
                      info@webdesigner.com
                    </a>
                  </div>
                  <div>
                    <p className="letter-spacing-wide mb-1 font-medium">
                      Teléfono
                    </p>
                    <a
                      href="tel:+34612345678"
                      className="text-lg transition-opacity hover:opacity-70"
                    >
                      +34 612 345 678
                    </a>
                  </div>
                  <div>
                    <p className="letter-spacing-wide mb-1 font-medium">
                      Ubicación
                    </p>
                    <p className="text-muted-foreground">
                      Barcelona, España
                      <br />
                      Trabajo remoto disponible
                    </p>
                  </div>
                </div>
              </Card>

              {/* Working Hours */}
              <Card className="p-8">
                <h3 className="font-display letter-spacing-wide mb-6 text-xl font-bold">
                  Horario de Atención
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span>Cerrado</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">
                  Respondemos emails en menos de 24h
                </p>
              </Card>

              {/* Social Links */}
              <Card className="p-8">
                <h3 className="font-display letter-spacing-wide mb-6 text-xl font-bold">
                  Síguenos
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://linkedin.com/company/webdesigner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-muted flex items-center justify-center rounded-lg border p-3 transition-colors"
                  >
                    <span className="letter-spacing-wide">LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com/webdesigner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-muted flex items-center justify-center rounded-lg border p-3 transition-colors"
                  >
                    <span className="letter-spacing-wide">Instagram</span>
                  </a>
                  <a
                    href="https://twitter.com/webdesigner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-muted flex items-center justify-center rounded-lg border p-3 transition-colors"
                  >
                    <span className="letter-spacing-wide">Twitter</span>
                  </a>
                  <a
                    href="https://github.com/webdesigner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-muted flex items-center justify-center rounded-lg border p-3 transition-colors"
                  >
                    <span className="letter-spacing-wide">GitHub</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display letter-spacing-wider mb-12 text-center text-3xl font-bold">
            Preguntas Frecuentes
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="letter-spacing-wide mb-2 font-bold">
                ¿Cuánto tiempo toma un proyecto?
              </h4>
              <p className="text-muted-foreground text-sm">
                Depende del tipo de proyecto. Una landing page puede estar lista
                en 2-3 semanas, mientras que un e-commerce complejo puede tomar
                5-6 semanas.
              </p>
            </div>
            <div>
              <h4 className="letter-spacing-wide mb-2 font-bold">
                ¿Trabajáis con clientes internacionales?
              </h4>
              <p className="text-muted-foreground text-sm">
                Sí, trabajamos con clientes de toda Europa y América. Ofrecemos
                soporte en español e inglés.
              </p>
            </div>
            <div>
              <h4 className="letter-spacing-wide mb-2 font-bold">
                ¿Incluís hosting y dominio?
              </h4>
              <p className="text-muted-foreground text-sm">
                No incluimos hosting ni dominio en nuestros precios, pero
                podemos recomendarte las mejores opciones según tu proyecto.
              </p>
            </div>
            <div>
              <h4 className="letter-spacing-wide mb-2 font-bold">
                ¿Ofrecéis mantenimiento?
              </h4>
              <p className="text-muted-foreground text-sm">
                Sí, ofrecemos planes de mantenimiento mensual desde 50€/mes que
                incluyen actualizaciones, backups y soporte técnico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
