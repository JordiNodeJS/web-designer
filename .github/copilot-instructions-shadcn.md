# Instrucciones para agentes de IA (Copilot) - web-designer

Propósito: proporcionar contexto específico del repositorio para que un agente de Copilot trabaje de forma segura y eficiente en este proyecto Next.js + TypeScript con shadcn/ui.

---

## Resumen del repositorio

- **Nombre**: `web-designer`
- **Propósito**: aplicación web frontend basada en Next.js para diseño/visualización
- **Stack principal**: Next.js 15 + TypeScript + React 19 + Tailwind CSS v4 + **shadcn/ui**
- **Tamaño**: pequeño/mediano (estructura simple)

## Stack y dependencias clave

- **Framework**: Next.js 15.4.6 (App Router)
- **Lenguaje**: TypeScript 5+
- **UI Components**: **shadcn/ui** (nuevo-york style, neutral theme)
- **Styling**: Tailwind CSS v4, `clsx`, `tailwind-merge`
- **Theming**: `next-themes` (modo oscuro)
- **Package Manager**: `pnpm`
- **Formato/Linter**: Prettier + ESLint

## Configuración shadcn/ui

El proyecto está configurado con shadcn/ui usando:

- **Estilo**: new-york
- **Color base**: neutral
- **CSS variables**: habilitadas
- **RSC**: habilitado (React Server Components)
- **TypeScript**: habilitado

### Aliases configurados

- `@/components` → componentes
- `@/lib/utils` → utilidades
- `@/components/ui` → componentes shadcn/ui
- `@/lib` → librerías
- `@/hooks` → hooks

### Componentes shadcn/ui instalados

- `button` - Botones con múltiples variants (default, outline, ghost, etc.)
- `card` - Cards con CardHeader, CardContent, CardTitle, CardDescription
- `input` - Campos de entrada
- `label` - Etiquetas para formularios

### Tema y modo oscuro

- Configurado con `next-themes` y `ThemeProvider`
- Variables CSS configuradas para tema neutral
- Soporte automático de modo oscuro en todos los componentes

## Comandos esenciales

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Verificaciones (ejecutar antes de commits)
pnpm run type-check
pnpm lint
pnpm build

# shadcn/ui
pnpm dlx shadcn@latest add <component-name>  # Instalar componente
pnpm dlx shadcn@latest add                   # Listar disponibles
```

## Reglas de desarrollo con shadcn/ui

### ✅ DO (Hacer)

- **Usar componentes instalados**: Solo usar componentes de `src/components/ui/`
- **Instalar antes de usar**: `pnpm dlx shadcn@latest add <component>` para nuevos componentes
- **Usar función cn()**: Importar de `@/lib/utils` para combinar clases Tailwind
- **Respetar variants**: Usar las props y variants definidas en cada componente
- **Importaciones correctas**: `import { Button } from "@/components/ui/button"`

### ❌ DON'T (No hacer)

- **No modificar** archivos en `src/components/ui/` (son generados)
- **No crear UI desde cero** si existe equivalente en shadcn/ui
- **No usar Tailwind complejo** sin función `cn()`
- **No importar** directamente de Radix UI (usar shadcn/ui)

## Ejemplos de código

### Botón básico

```typescript
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return (
    <div className="space-x-2">
      <Button>Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost" size="sm">Small Ghost</Button>
    </div>
  );
}
```

### Card con contenido

```typescript
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description text</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Card content goes here</p>
        <Button className="w-full">Action Button</Button>
      </CardContent>
    </Card>
  );
}
```

### Formulario con Input y Label

```typescript
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function MyForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      <Button type="submit" className="w-full">Submit</Button>
    </form>
  );
}
```

### Combinando clases con cn()

```typescript
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function ConditionalButton({ isActive }: { isActive: boolean }) {
  return (
    <Button
      className={cn(
        "transition-all duration-200",
        isActive && "bg-green-500 hover:bg-green-600"
      )}
    >
      {isActive ? "Active" : "Inactive"}
    </Button>
  );
}
```

## Estructura del proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal con ThemeProvider
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales + variables shadcn/ui
├── components/
│   ├── ui/                # Componentes shadcn/ui (NO MODIFICAR)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   └── theme-provider.tsx # Proveedor de tema
├── lib/
│   └── utils.ts           # Función cn() y utilidades
├── hooks/                 # Custom hooks
└── types/                 # Definiciones TypeScript
```

## Flujo de trabajo recomendado

1. **Antes de agregar UI**: Verificar si existe en shadcn/ui
2. **Instalar componente**: `pnpm dlx shadcn@latest add <nombre>`
3. **Importar y usar**: Seguir ejemplos de la documentación
4. **Verificar build**: `pnpm build` antes de commit
5. **Formatear**: `pnpm format` para Tailwind CSS ordenado

## Componentes disponibles para instalar

Algunos componentes útiles que se pueden agregar:

- `dropdown-menu` - Menús desplegables
- `dialog` - Modales/diálogos
- `tooltip` - Tooltips
- `select` - Selectores
- `checkbox` - Checkboxes
- `textarea` - Áreas de texto
- `tabs` - Pestañas
- `alert` - Alertas
- `badge` - Badges
- `skeleton` - Skeletons de carga

## Comandos de verificación antes de commit

```bash
pnpm install
pnpm run type-check    # Verificar TypeScript
pnpm lint             # Verificar ESLint
pnpm run format       # Formatear código
pnpm build            # Verificar build
```

## Recursos

- **shadcn/ui docs**: https://ui.shadcn.com/
- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **Next.js 15**: https://nextjs.org/docs
- **Radix UI**: https://www.radix-ui.com/ (base de shadcn/ui)

---

**Nota importante**: Estas instrucciones priorizan el uso de shadcn/ui para mantener consistencia y calidad en la UI. Siempre consultar la documentación oficial para patrones específicos.
