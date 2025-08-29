# Web Designer - Aplicación de Servicios Web

Una aplicación web moderna para ofrecer servicios de desarrollo web y diseño, inspirada en el diseño minimalista de [Elva](https://www.helloelva.com/) y desarrollada con Next.js 15 + TypeScript.

## 🚀 Características

- **Catálogo de Servicios**: 9 tipos de servicios web con precios y características detalladas
- **Calculadora de Presupuestos**: Herramienta interactiva para calcular presupuestos personalizados
- **Diseño Inspirado en Elva**: Estética minimalista con tipografías espaciadas y animaciones sutiles
- **Responsive Design**: Optimizado para todos los dispositivos
- **TypeScript**: Tipado estricto para mayor robustez
- **Componentes Modulares**: Arquitectura escalable con componentes reutilizables

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Fonts**: Inter + Space Grotesk
- **Iconos**: Lucide React
- **Linting**: ESLint + Prettier

## 📋 Servicios Disponibles

1. **Landing Page Profesional** - €450
2. **Página Personal (Portfolio)** - €600
3. **Página de Negocio (PYME)** - €2.000
4. **Tienda Online / E-commerce** - €2.800
5. **Web para Eventos** - €1.700
6. **Web Inmobiliaria** - €2.500
7. **Web de Membresía / Cursos** - €2.500
8. **Microsite Promocional** - €850
9. **Web One Page Interactiva** - €1.400

Cada servicio incluye extras opcionales y tiempos estimados de desarrollo.

## 🎨 Características de Diseño

- **Tipografía**: Letter-spacing amplio inspirado en Elva
- **Colores**: Paleta neutra con acentos sutiles
- **Animaciones**: Transiciones suaves y efectos de hover
- **Layout**: Espacios generosos y contenido bien estructurado
- **Responsive**: Mobile-first design

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- pnpm (recomendado)

### Instalación

```bash
# Clonar el repositorio
git clone [url-del-repo]
cd web-designer

# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# El servidor estará disponible en http://localhost:3000
```

### Scripts Disponibles

```bash
# Desarrollo
pnpm dev              # Servidor de desarrollo con Turbopack
pnpm dev:debug       # Desarrollo con inspector de Node.js

# Producción
pnpm build           # Build de producción
pnpm start           # Ejecutar build de producción
pnpm preview         # Build + start

# Calidad de código
pnpm lint            # Ejecutar ESLint
pnpm lint:fix        # Corregir errores de ESLint automáticamente
pnpm format          # Formatear código con Prettier
pnpm format:check    # Verificar formato del código
pnpm type-check      # Verificar tipos de TypeScript

# Utilidades
pnpm clean           # Limpiar archivos de build
```

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── calculadora/       # Página de calculadora de presupuestos
│   ├── contacto/          # Página de contacto
│   ├── servicios/         # Página de servicios
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── hero-section.tsx  # Sección hero
│   ├── navigation.tsx    # Navegación principal
│   ├── services-grid.tsx # Grid de servicios
│   └── footer.tsx        # Footer
├── lib/                  # Utilidades y datos
│   ├── utils.ts         # Funciones utilitarias
│   └── services-data.ts # Datos de servicios
└── types/               # Definiciones de tipos TypeScript
    ├── index.ts
    └── services.ts
```

## 🎯 Funcionalidades Principales

### 1. Página de Inicio
- Hero section con diseño inspirado en Elva
- Servicios populares destacados
- Sección de proyectos
- Área de partners

### 2. Calculadora de Presupuestos
- Selección de servicios
- Extras opcionales con precios dinámicos
- Formulario de información del cliente
- Cálculo automático del total

### 3. Página de Servicios
- Servicios organizados por categorías
- Información detallada de cada servicio
- Enlaces directos a la calculadora

### 4. Página de Contacto
- Formulario de contacto completo
- Información de contacto directo
- Preguntas frecuentes

## 🔧 Personalización

### Cambiar Servicios

Edita el archivo `src/lib/services-data.ts` para:
- Añadir nuevos servicios
- Modificar precios
- Actualizar características
- Agregar/eliminar extras

### Estilos Personalizados

Los estilos están en `src/app/globals.css`:
- Variables CSS para colores
- Clases utilitarias personalizadas
- Animaciones específicas

### Componentes UI

Los componentes están en `src/components/ui/` y siguen el patrón de shadcn/ui.

## 📱 Responsive Design

- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🧪 Testing

```bash
# Ejecutar tests (cuando estén configurados)
pnpm test

# Tests en modo watch
pnpm test:watch

# Coverage de tests
pnpm test:coverage
```

## 📦 Construcción y Despliegue

```bash
# Build de producción
pnpm build

# Verificar build
pnpm start

# Análisis del bundle
pnpm analyze
```

### Despliegue en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 🔮 Próximas Características

- [ ] Panel administrativo para gestionar servicios
- [ ] Sistema de autenticación
- [ ] Integración con Stripe para pagos
- [ ] Internacionalización (es/en)
- [ ] PWA (Progressive Web App)
- [ ] Sistema de tickets/solicitudes
- [ ] Base de datos para persistir solicitudes
- [ ] Email notifications
- [ ] Tests automatizados

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- Diseño inspirado en [Elva Design Group](https://www.helloelva.com/)
- [shadcn/ui](https://ui.shadcn.com/) por los componentes base
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de estilos
- [Next.js](https://nextjs.org/) por el framework
