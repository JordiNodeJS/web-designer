'use client';

import { useState } from 'react';
import { Service } from '@/types/services';
import { services } from '@/lib/services-data';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

interface CalculatorState {
  selectedService: Service | null;
  selectedExtras: string[];
  customRequests: string;
  clientInfo: {
    name: string;
    email: string;
    phone: string;
    company: string;
  };
}

export default function CalculatorPage() {
  const [state, setState] = useState<CalculatorState>({
    selectedService: null,
    selectedExtras: [],
    customRequests: '',
    clientInfo: {
      name: '',
      email: '',
      phone: '',
      company: '',
    },
  });

  const calculateTotal = (): number => {
    if (!state.selectedService) return 0;

    let total = state.selectedService.price;

    state.selectedExtras.forEach(extraId => {
      const extra = state.selectedService?.addons.find(e => e.id === extraId);
      if (extra && state.selectedService) {
        if (extra.isPercentage) {
          total += (state.selectedService.price * extra.price) / 100;
        } else {
          total += extra.price;
        }
      }
    });

    return total;
  };

  const selectService = (service: Service) => {
    setState(prev => ({
      ...prev,
      selectedService: service,
      selectedExtras: [],
    }));
  };

  const toggleExtra = (extraId: string) => {
    setState(prev => ({
      ...prev,
      selectedExtras: prev.selectedExtras.includes(extraId)
        ? prev.selectedExtras.filter(id => id !== extraId)
        : [...prev.selectedExtras, extraId],
    }));
  };

  const updateClientInfo = (
    field: keyof typeof state.clientInfo,
    value: string
  ) => {
    setState(prev => ({
      ...prev,
      clientInfo: {
        ...prev.clientInfo,
        [field]: value,
      },
    }));
  };

  const handleSubmitQuote = () => {
    if (!state.selectedService || !state.clientInfo.email) {
      alert('Por favor, selecciona un servicio y proporciona tu email.');
      return;
    }

    // TODO: Implementar envío de solicitud de presupuesto
    console.log('Solicitud de presupuesto:', {
      service: state.selectedService,
      extras: state.selectedExtras,
      total: calculateTotal(),
      client: state.clientInfo,
      customRequests: state.customRequests,
    });

    alert('¡Solicitud enviada! Te contactaremos pronto.');
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="px-6 pt-24 pb-20">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="font-display letter-spacing-wider mb-4 text-4xl font-bold md:text-5xl">
              Calculadora de Presupuestos
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Selecciona el servicio que necesitas, personalízalo con extras y
              obtén un presupuesto detallado al instante.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Services Selection */}
            <div className="space-y-6 lg:col-span-2">
              <div>
                <h2 className="font-display letter-spacing-wide mb-6 text-2xl font-bold">
                  1. Selecciona tu Servicio
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {services.map(service => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        state.selectedService?.id === service.id
                          ? 'ring-primary bg-primary/5 ring-2'
                          : ''
                      }`}
                      onClick={() => selectService(service)}
                    >
                      <CardHeader>
                        <div className="mb-2 flex items-center justify-between">
                          <Badge
                            variant="secondary"
                            className="letter-spacing-wide"
                          >
                            {service.category.toUpperCase()}
                          </Badge>
                          {service.popular && (
                            <Badge
                              variant="destructive"
                              className="letter-spacing-wide"
                            >
                              POPULAR
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="font-display letter-spacing-wide text-lg">
                          {service.name}
                        </CardTitle>
                        <div className="flex items-center justify-between">
                          <p className="text-xl font-bold">
                            €{service.price.toLocaleString()}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {service.timeframe}
                          </p>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Extras Selection */}
              {state.selectedService && (
                <div>
                  <h2 className="font-display letter-spacing-wide mb-6 text-2xl font-bold">
                    2. Extras Opcionales
                  </h2>
                  <div className="space-y-3">
                    {state.selectedService.addons.map(extra => (
                      <Card key={extra.id} className="p-4">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={extra.id}
                            checked={state.selectedExtras.includes(extra.id)}
                            onCheckedChange={() => toggleExtra(extra.id)}
                          />
                          <div className="flex-1">
                            <Label
                              htmlFor={extra.id}
                              className="letter-spacing-wide cursor-pointer font-medium"
                            >
                              {extra.name}
                            </Label>
                            <p className="text-muted-foreground text-sm">
                              {extra.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">
                              {extra.isPercentage
                                ? `+${extra.price}%`
                                : `+€${extra.price}`}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom Requests */}
              {state.selectedService && (
                <div>
                  <h2 className="font-display letter-spacing-wide mb-6 text-2xl font-bold">
                    3. Solicitudes Especiales
                  </h2>
                  <Textarea
                    placeholder="Describe cualquier característica especial o requerimiento personalizado..."
                    value={state.customRequests}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setState(prev => ({
                        ...prev,
                        customRequests: e.target.value,
                      }))
                    }
                    className="min-h-[100px]"
                  />
                </div>
              )}
            </div>

            {/* Quote Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="p-6">
                  <h3 className="font-display letter-spacing-wide mb-6 text-xl font-bold">
                    Resumen del Presupuesto
                  </h3>

                  {state.selectedService ? (
                    <div className="space-y-4">
                      {/* Selected Service */}
                      <div>
                        <h4 className="letter-spacing-wide mb-2 font-medium">
                          Servicio Seleccionado:
                        </h4>
                        <p className="text-sm font-bold">
                          {state.selectedService.name}
                        </p>
                        <p className="text-lg font-bold">
                          €{state.selectedService.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Selected Extras */}
                      {state.selectedExtras.length > 0 && (
                        <div>
                          <h4 className="letter-spacing-wide mb-2 font-medium">
                            Extras Seleccionados:
                          </h4>
                          <div className="space-y-2">
                            {state.selectedExtras.map(extraId => {
                              const extra = state.selectedService?.addons.find(
                                e => e.id === extraId
                              );
                              if (!extra || !state.selectedService) return null;

                              const extraCost = extra.isPercentage
                                ? (state.selectedService.price *
                                    extra.price) /
                                  100
                                : extra.price;

                              return (
                                <div
                                  key={extraId}
                                  className="flex justify-between text-sm"
                                >
                                  <span>{extra.name}</span>
                                  <span>+€{extraCost.toLocaleString()}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Total */}
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between">
                          <span className="letter-spacing-wide text-lg font-bold">
                            TOTAL:
                          </span>
                          <span className="text-2xl font-bold">
                            €{calculateTotal().toLocaleString()}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-1 text-xs">
                          IVA incluido
                        </p>
                      </div>

                      {/* Time Estimate */}
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="letter-spacing-wide text-sm font-medium">
                          Tiempo estimado: {state.selectedService.timeframe}
                        </p>
                      </div>

                      {/* Client Information Form */}
                      <div className="space-y-4 border-t pt-4">
                        <h4 className="letter-spacing-wide font-medium">
                          Información de Contacto:
                        </h4>

                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="name">Nombre *</Label>
                            <Input
                              id="name"
                              value={state.clientInfo.name}
                              onChange={e =>
                                updateClientInfo('name', e.target.value)
                              }
                              placeholder="Tu nombre completo"
                            />
                          </div>

                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={state.clientInfo.email}
                              onChange={e =>
                                updateClientInfo('email', e.target.value)
                              }
                              placeholder="tu@email.com"
                            />
                          </div>

                          <div>
                            <Label htmlFor="phone">Teléfono</Label>
                            <Input
                              id="phone"
                              value={state.clientInfo.phone}
                              onChange={e =>
                                updateClientInfo('phone', e.target.value)
                              }
                              placeholder="+34 600 000 000"
                            />
                          </div>

                          <div>
                            <Label htmlFor="company">Empresa</Label>
                            <Input
                              id="company"
                              value={state.clientInfo.company}
                              onChange={e =>
                                updateClientInfo('company', e.target.value)
                              }
                              placeholder="Nombre de tu empresa"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button
                        onClick={handleSubmitQuote}
                        className="letter-spacing-wide w-full"
                        size="lg"
                      >
                        Solicitar Presupuesto
                      </Button>

                      <p className="text-muted-foreground text-center text-xs">
                        Te contactaremos en menos de 24h
                      </p>
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center">
                      Selecciona un servicio para ver el presupuesto
                    </p>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
