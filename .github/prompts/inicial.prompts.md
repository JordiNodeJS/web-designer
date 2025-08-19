Teniendo en cuenta el catálogo de precios adjunto, desarrolla una aplicación web para clientes usando Next.js 15 + TypeScript que permita:

- Ver y filtrar servicios/paquetes (Landing, E-commerce, Membership, etc.) con precios, tiempos estimados y extras.
- Generar presupuestos dinámicos: selector de extras, opciones multidioma y cálculo de total (IVA incluido).
- Solicitar o contratar un servicio: formulario de cliente que guarda la solicitud y genera resumen.
- Panel administrativo mínimo: CRUD del catálogo y listado/estado de solicitudes.

Requisitos técnicos mínimos:

- pnpm, Next.js 15 (App Router), TypeScript estricto, React 19, Tailwind CSS v4.
- ESLint, Prettier (+ prettier-plugin-tailwindcss), tests con React Testing Library.
- Integración Stripe para pagos (50% inicial / 50% final), PWA básico e internacionalización (es/en).

Entrega esperada:

- Prototipo funcional en el repositorio con instrucciones de build (pnpm install, pnpm dev, pnpm build), documentación breve y tests básicos.

Usar este archivo como fuente principal para servicios, precios base, extras opcionales y tiempos estimados al generar el catálogo y calcular presupuestos.
[Ver catálogo de precios y servicios detallado](./presupuesto-catalogo-tarifas-grok.md)
