# Guía de Desarrollo con shadcn/ui

Esta guía establece las reglas y mejores prácticas para trabajar con shadcn/ui en el proyecto web-designer.

## 🎯 Principios Fundamentales

1. **Consistencia**: Usar únicamente componentes de shadcn/ui para la UI
2. **Accesibilidad**: Aprovechar las características de accesibilidad integradas
3. **Mantenibilidad**: No modificar componentes generados, extenderlos si es necesario
4. **Performance**: Usar la función `cn()` para optimizar clases de Tailwind

## 📦 Gestión de Componentes

### Componentes Instalados

Actualmente disponibles en `src/components/ui/`:

- ✅ `button` - Botones con variants (default, outline, ghost, destructive)
- ✅ `card` - Cards con CardHeader, CardContent, CardTitle, CardDescription
- ✅ `input` - Campos de entrada para formularios
- ✅ `label` - Etiquetas para formularios

### Instalación de Nuevos Componentes

```bash
# Instalar un componente específico
pnpm dlx shadcn@latest add dialog

# Instalar múltiples componentes
pnpm dlx shadcn@latest add dropdown-menu tooltip select tabs

# Ver todos los componentes disponibles
pnpm dlx shadcn@latest add
```

### Componentes Recomendados para Instalar

Para un proyecto completo, considera instalar:

**Navegación y Layout**:

- `dropdown-menu` - Menús desplegables
- `navigation-menu` - Menús de navegación
- `tabs` - Pestañas
- `separator` - Separadores

**Formularios**:

- `select` - Selectores/dropdown
- `checkbox` - Checkboxes
- `textarea` - Áreas de texto
- `form` - Componentes de formulario con validación

**Feedback y Estados**:

- `dialog` - Modales y diálogos
- `alert` - Alertas y notificaciones
- `toast`/`sonner` - Notificaciones toast
- `skeleton` - Indicadores de carga
- `progress` - Barras de progreso

**Contenido**:

- `table` - Tablas de datos
- `badge` - Badges/etiquetas
- `avatar` - Avatares de usuario
- `tooltip` - Tooltips informativos

## 🛠️ Patrones de Uso

### Importaciones Correctas

```tsx
// ✅ Correcto
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// ❌ Incorrecto
import Button from '@/components/ui/button';
import { Button as ShadcnButton } from '@/components/ui/button';
```

### Uso de Variants

```tsx
import { Button } from '@/components/ui/button';

export default function ButtonExamples() {
  return (
    <div className="space-x-2">
      {/* Variants disponibles */}
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>

      {/* Sizes disponibles */}
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>

      {/* Estados */}
      <Button disabled>Disabled</Button>
    </div>
  );
}
```

### Combinación de Clases con cn()

```tsx
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ConditionalButtonProps {
  isActive: boolean;
  className?: string;
}

export default function ConditionalButton({
  isActive,
  className,
}: ConditionalButtonProps) {
  return (
    <Button
      className={cn(
        'transition-all duration-200',
        isActive && 'bg-green-500 hover:bg-green-600',
        className
      )}
    >
      {isActive ? 'Active' : 'Inactive'}
    </Button>
  );
}
```

### Componentes de Formulario

```tsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactForm() {
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

### Layout con Cards

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function FeatureGrid() {
  const features = [
    {
      title: 'Fast Development',
      description: 'Build quickly with pre-made components',
      action: 'Learn More',
    },
    {
      title: 'Accessible',
      description: 'Built with accessibility in mind',
      action: 'View Guidelines',
    },
    {
      title: 'Customizable',
      description: 'Easily customize to match your brand',
      action: 'Customize',
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              {feature.action}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

## 🎨 Personalización y Extensión

### Extender Componentes (Composición)

```tsx
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LoadingButtonProps extends React.ComponentProps<typeof Button> {
  isLoading?: boolean;
}

export function LoadingButton({
  isLoading,
  children,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      className={cn('relative', className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        </div>
      )}
      <span className={cn(isLoading && 'opacity-0')}>{children}</span>
    </Button>
  );
}
```

### Crear Variantes Personalizadas

```tsx
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends React.ComponentProps<typeof Button> {
  gradient?: 'blue' | 'purple' | 'green';
}

export function GradientButton({
  gradient = 'blue',
  className,
  ...props
}: GradientButtonProps) {
  const gradientClasses = {
    blue: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    purple:
      'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    green:
      'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
  };

  return (
    <Button
      className={cn(
        'border-0 text-white',
        gradientClasses[gradient],
        className
      )}
      {...props}
    />
  );
}
```

## 🚫 Anti-Patrones (Qué NO Hacer)

### ❌ No Modificar Archivos Generados

```tsx
// ❌ NO hacer esto
// Modificar src/components/ui/button.tsx directamente
```

### ❌ No Recrear Componentes Existentes

```tsx
// ❌ NO hacer esto
export function CustomButton() {
  return (
    <button className="rounded bg-blue-500 px-4 py-2 text-white">
      Custom Button
    </button>
  );
}

// ✅ Usar shadcn/ui en su lugar
import { Button } from '@/components/ui/button';
```

### ❌ No Importar Directamente de Radix

```tsx
// ❌ NO hacer esto
import * as Dialog from '@radix-ui/react-dialog';

// ✅ Instalar e importar de shadcn/ui
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
```

## 🔧 Mantenimiento

### Actualizar Componentes

```bash
# Actualizar todos los componentes instalados
pnpm dlx shadcn@latest update

# Actualizar un componente específico
pnpm dlx shadcn@latest update button
```

### Verificar Configuración

```bash
# Verificar la configuración actual
cat components.json

# Re-inicializar si es necesario (cuidado: puede sobrescribir)
pnpm dlx shadcn@latest init
```

## 📚 Recursos Adicionales

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Next.js App Router](https://nextjs.org/docs/app)

---

**Recuerda**: Siempre verificar que el proyecto compile (`pnpm build`) después de agregar nuevos componentes o hacer cambios significativos.
