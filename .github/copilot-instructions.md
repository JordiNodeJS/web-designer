# Instrucciones para agentes de IA (Copilot) - web-designer

Propósito: proporcionar contexto específico del repositorio para que un agente de Copilot trabaje de forma segura y eficiente en este proyecto Next.js + TypeScript.

---

Resumen del repositorio

- Nombre: `web-designer`.
- Propósito: aplicación web frontend basada en Next.js para diseño/visualización (UI components bajo `src/components`).
- Tipo: monorepo pequeño/único paquete: Next.js (app router), TypeScript, React, Tailwind CSS.
- Tamaño: pequeño/mediano (estructura simple, pocos paquetes).

Stack y dependencias clave

- Framework: Next.js 15 (archivo `package.json` declara `next@15.4.6`).
- Lenguaje: TypeScript (v5 en devDependencies).
- UI/libs: React 19, Tailwind CSS v4, `clsx`, `tailwind-merge`.
- Formato/estilo: Prettier (+ prettier-plugin-tailwindcss).
- Linter: ESLint (config `eslint-config-next`).

Asunciones razonables (si falta info)

- Se usa `pnpm` como gestor de paquetes (lockfile `pnpm-lock.yaml` presente). Asume Node.js moderno (18+). Si el agente necesita precisión de versión, puede buscar un archivo `.nvmrc` o `engines` en `package.json`.
- El entorno interactivo es bash/Unix-like (los scripts usan `rm -rf` para limpieza).

Comandos y pasos verificados para construir / validar cambios

- Instalar dependencias: `pnpm install` (ejecutar siempre antes de otros pasos).
- Desarrollo local: `pnpm dev` (usa `next dev --turbopack`).
- Modo debug: `pnpm run dev:debug` (expone inspector Node con `--inspect`).
- Build de producción: `pnpm build` (ejecuta `next build`).
- Ejecutar producción local: `pnpm start` tras `pnpm build`.
- Previsualizar (build + start): `pnpm preview`.
- Lint: `pnpm lint`.
- Intentar arreglos automáticos de lint: `pnpm run lint:fix`.
- Formateo: `pnpm format` / comprobación `pnpm run format:check`.
- Chequeo de tipos: `pnpm run type-check`.
- Limpiar artefactos: `pnpm run clean` (usa `rm -rf .next out dist`).

Recomendaciones al hacer cambios (concretas y reproducibles)

- Flujo mínimo de verificación antes de abrir PR:
  1. `pnpm install`
  2. `pnpm run type-check` (corregir errores de TS)
  3. `pnpm lint` -> si hay errores aplicables, `pnpm run lint:fix` y re-ejecutar
  4. `pnpm run format` y confirmar `pnpm run format:check`
  5. `pnpm build` (confirmar que `next build` completa sin errores)
- Si un cambio introduce fallos en `pnpm build`, documenta el error y el archivo que lo causa en la descripción del PR.
- Evitar cambios que modifiquen los paquetes principales sin actualizar `package.json` y sin ejecutar `pnpm install` y `pnpm build` localmente.

Layout principal del proyecto (rutas relevantes)

- `/package.json` - scripts y dependencias (usar los scripts descritos arriba).
- `/next.config.ts` - configuración de Next.js.
- `/src/app` - entrada de la aplicación (rutas, `page.tsx`, `layout.tsx`).
- `/src/components` - componentes UI reutilizables.
- `/src/hooks`, `/src/lib`, `/src/utils.ts`, `/src/types` - utilidades y tipos.
- `/public` - activos estáticos (iconos, imágenes).
- `/README.md` - documentación principal del proyecto.

Validaciones adicionales y CI

- No asumas pipelines: buscar en `.github/workflows/` para ver CI existente. Si no existe, el agente debe no crear flujos de CI por su cuenta a menos que la tarea lo requiera.
- Validaciones mínimas que el agente debe ejecutar localmente antes de proponer cambios:
  - `pnpm run type-check`
  - `pnpm lint`
  - `pnpm build`

Convenciones de código y estilo

- TypeScript estricto por defecto: ejecutar `tsc --noEmit` (script `type-check`).
- Usa Prettier con `prettier-plugin-tailwindcss` para evitar reordenamientos manuales de clases Tailwind.
- ESLint usa `eslint-config-next` — seguir sus reglas y sugerencias.

Reglas de estilo obligatorias

- Usa TypeScript para todo el código (no introducir archivos .js para lógica nueva).
- Preferir componentes funcionales y React hooks en lugar de clases.
- Usar PascalCase para nombres de componentes (MyComponent).
- Anotar componentes con `React.FC` cuando se requiera una firma explícita.
- Exportar como `default` cuando el archivo tiene una sola exportación; usar named exports para utilidades y hooks.
- Preferir `const` sobre `let` salvo necesidad de reasignación.
- Colocar componentes en `src/components/`, hooks en `src/hooks/`, utilidades en `src/lib/` y tipos en `src/types/` o co-localizarlos con el componente.
- Escribir tests con React Testing Library para componentes; considerar Playwright o Cypress para E2E.

Ejemplos rápidos

Server Component (App Router):

```typescript
// Use for static content, SEO, and server-side data fetching
export default async function ServerComponent() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}
```

Client Component:

```typescript
'use client';
import { useState } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

Don’ts (qué evitar)

- No introducir cambios que rompan `pnpm build` o `pnpm start` sin proporcionar pasos claros para solucionarlo.
- No ejecutar comandos de sistema no confirmados (por ejemplo, instalar software globalmente).

Comportamiento esperado del agente al generar código o PRs

- Minimizar archivos modificados. Preferir cambios focalizados y pequeños.
- Incluir en el PR la lista de comandos ejecutados localmente y los resultados (success/fail).
- Añadir pruebas o cambios en type-check/lint si modifica la superficie pública del código.
- Si la información en este fichero parece incompleta o contradice lo observado al ejecutar comandos, el agente debe realizar búsquedas puntuales (`grep`/`file search`) y documentar lo encontrado.

Notas finales

- Estas instrucciones están diseñadas para uso general en este repositorio y no deben incluir tareas específicas de alta prioridad.
- Si necesitas detalles adicionales (CI, versiones exactas de Node, comandos de despliegue), búscalos en la raíz del repo o pide confirmación.

---

Confío en estas instrucciones. Usa esta guía primero y solo busca más contexto cuando sea necesario.
