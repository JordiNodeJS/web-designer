# 🚀 PROMPT MAESTRO: Next.js 15 Web Designer Project - One-Shot Setup

## 📋 INSTRUCCIONES CRÍTICAS

Este prompt te permitirá crear un proyecto completo de Next.js 15 con todas las mejores prácticas y configuraciones modernas en un solo paso. Sigue EXACTAMENTE estos pasos en orden.

## 🎯 OBJETIVO

Crear un proyecto de diseño web moderno con Next.js 15, TypeScript, Tailwind CSS v4, y todas las configuraciones de desarrollo profesional incluidas.

## 🛠️ STACK TECNOLÓGICO REQUERIDO

- **Framework**: Next.js 15 con App Router y Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm
- **Linting**: ESLint + Prettier
- **Runtime**: React 19

## 📁 PASO 1: CREAR PROYECTO BASE

```bash
# Navegar al directorio de trabajo
cd /g/DEV/PROJECTS/web-designer

# Crear proyecto Next.js 15 con todas las opciones modernas
pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Instalar dependencias adicionales críticas
pnpm add clsx tailwind-merge
pnpm add -D prettier prettier-plugin-tailwindcss
```

## 📄 PASO 2: CONFIGURAR ARCHIVOS CRÍTICOS

### 🔧 .cursorrules (Reglas de AI)

````text
# Web Designer Project - AI Assistant Rules

## Project Overview
This is a Next.js 15 project with TypeScript, Tailwind CSS, and modern React patterns. The project uses pnpm as the package manager and follows best practices for modern web development.

## Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js config
- **Runtime**: React 19

## Code Style and Conventions

### General Guidelines
- Use TypeScript for all code
- Prefer functional components over class components
- Use React hooks for state management
- Follow Next.js App Router conventions
- Use modern ES6+ syntax
- Prefer const over let when variables won't be reassigned

### File Structure
- Place components in `src/components/`
- Use descriptive folder names and file names
- Group related components in subdirectories
- Keep utilities in `src/lib/` or `src/utils/`
- Place custom hooks in `src/hooks/`
- Store types in `src/types/` or co-locate with components

### Component Guidelines
- Use PascalCase for component names
- Export components as default when there's only one export
- Use named exports for utilities and hooks
- Include proper TypeScript interfaces for props
- Use React.FC type annotation for components when needed

### Styling Guidelines
- Use Tailwind CSS classes for styling
- Prefer utility classes over custom CSS when possible
- Use Tailwind's design system (spacing, colors, etc.)
- Create custom components for reusable UI patterns
- Use CSS modules or styled-components only when Tailwind is insufficient

### State Management
- Use React hooks (useState, useEffect, useContext) for local state
- Consider Zustand or React Query for complex state management
- Use React Context sparingly, prefer prop drilling for simple cases
- Implement proper loading and error states

### Performance Considerations
- Use Next.js Image component for images
- Implement proper code splitting
- Use React.memo for expensive components
- Prefer server components when possible in App Router
- Use dynamic imports for large components

### Error Handling
- Implement proper error boundaries
- Use try-catch blocks for async operations
- Provide meaningful error messages to users
- Log errors appropriately for debugging

### Accessibility
- Use semantic HTML elements
- Include proper ARIA labels and roles
- Ensure keyboard navigation works
- Maintain proper color contrast ratios
- Test with screen readers

## Specific Instructions

### When creating components:
1. Always include TypeScript interfaces for props
2. Use proper semantic HTML
3. Implement responsive design with Tailwind
4. Add proper error handling
5. Include loading states when applicable

### When working with APIs:
1. Use Next.js API routes or server actions
2. Implement proper error handling
3. Use TypeScript for request/response types
4. Consider data validation with libraries like Zod

### When adding dependencies:
1. Check if the functionality can be achieved with built-in features first
2. Prefer well-maintained, popular packages
3. Use pnpm for package management
4. Update package.json scripts when needed

### Code Quality
- Write self-documenting code with clear variable and function names
- Add comments for complex business logic
- Use ESLint rules and fix all warnings
- Follow the existing code style in the project
- Write unit tests for critical functionality

## Common Patterns to Follow

### Server Components (default in App Router)
```typescript
// Use for static content, SEO, and server-side data fetching
export default async function ServerComponent() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}
````

### Client Components

```typescript
'use client';
// Use for interactivity, hooks, and browser APIs
import { useState } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

### Custom Hooks

```typescript
import { useState, useEffect } from 'react';

export function useCustomHook() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Effect logic
  }, []);

  return { state, setState };
}
```

## Performance and SEO

- Use appropriate Next.js metadata API for SEO
- Implement proper Open Graph and Twitter Card meta tags
- Use Next.js built-in optimizations (Image, Link, etc.)
- Consider implementing Progressive Web App features

## Security

- Validate all user inputs
- Use environment variables for sensitive data
- Implement proper authentication and authorization
- Follow OWASP security guidelines

## Testing

- Write unit tests for utilities and hooks
- Use React Testing Library for component tests
- Consider E2E tests with Playwright or Cypress
- Test accessibility with automated tools

Remember: Always prioritize user experience, maintainability, and performance in your code decisions.

````

### ⚙️ .prettierrc.json
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
````

### 🚫 .prettierignore

```text
node_modules
.next
out
dist
build
coverage
*.log
.env
.env.local
.env.production.local
.env.development.local
.DS_Store
Thumbs.db
```

### 🌍 .env.example

```env
# Environment Configuration
# Copy this file to .env.local and fill in your actual values

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Web Designer Project"

# Database (if needed)
# DATABASE_URL="your-database-url"

# Authentication (if needed)
# NEXTAUTH_SECRET="your-nextauth-secret"
# NEXTAUTH_URL="http://localhost:3000"

# External APIs (if needed)
# API_KEY="your-api-key"

# Analytics (if needed)
# NEXT_PUBLIC_GA_ID="your-google-analytics-id"
```

## 📂 PASO 3: ESTRUCTURA DE DIRECTORIOS

```bash
# Crear estructura de directorios recomendada
mkdir -p src/components/ui
mkdir -p src/lib
mkdir -p src/hooks
mkdir -p src/types
mkdir -p .vscode
```

### 📚 src/lib/utils.ts

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string or Date object to a readable format
 */
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

/**
 * Generate a random ID string
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Sleep utility for async functions
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

### 🏷️ src/types/index.ts

```typescript
// Common component props
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
}

// Form types
export interface FormState {
  loading: boolean;
  error?: string;
  success?: boolean;
}
```

## 🔧 PASO 4: CONFIGURACIÓN VS CODE

### 📦 .vscode/extensions.json

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "PKief.material-icon-theme",
    "usernamehw.errorlens",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-eslint",
    "oderwat.indent-rainbow",
    "GitHub.copilot",
    "GitHub.copilot-chat"
  ]
}
```

### ⚙️ .vscode/settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.suggest.autoImports": true,
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.next": true,
    "**/out": true,
    "**/.git": true,
    "**/pnpm-lock.yaml": true
  },
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/Thumbs.db": true,
    "**/node_modules": true,
    "**/.next": true
  }
}
```

### ✨ .vscode/typescript.code-snippets

```json
{
  "Next.js Page Component": {
    "scope": "typescript,typescriptreact",
    "prefix": "nxpage",
    "body": [
      "import { Metadata } from 'next';",
      "",
      "export const metadata: Metadata = {",
      "  title: '${1:Page Title}',",
      "  description: '${2:Page description}',",
      "};",
      "",
      "export default function ${3:PageName}() {",
      "  return (",
      "    <div className=\"${4:container mx-auto px-4 py-8}\">",
      "      <h1 className=\"text-3xl font-bold\">${5:Page Content}</h1>",
      "    </div>",
      "  );",
      "}"
    ],
    "description": "Create a Next.js page component with metadata"
  },
  "Next.js Layout Component": {
    "scope": "typescript,typescriptreact",
    "prefix": "nxlayout",
    "body": [
      "import { ReactNode } from 'react';",
      "",
      "interface ${1:Layout}Props {",
      "  children: ReactNode;",
      "}",
      "",
      "export default function ${1:Layout}({ children }: ${1:Layout}Props) {",
      "  return (",
      "    <div className=\"${2:min-h-screen}\">",
      "      ${3:<!-- Layout content -->}",
      "      {children}",
      "    </div>",
      "  );",
      "}"
    ],
    "description": "Create a Next.js layout component"
  },
  "React Component with Props": {
    "scope": "typescript,typescriptreact",
    "prefix": "rfc",
    "body": [
      "interface ${1:Component}Props {",
      "  ${2:prop}: ${3:string};",
      "}",
      "",
      "export default function ${1:Component}({ ${2:prop} }: ${1:Component}Props) {",
      "  return (",
      "    <div className=\"${4:}\">",
      "      ${5:Component content}",
      "    </div>",
      "  );",
      "}"
    ],
    "description": "Create a React functional component with TypeScript props"
  },
  "React Client Component": {
    "scope": "typescript,typescriptreact",
    "prefix": "rcc",
    "body": [
      "'use client';",
      "",
      "import { ${1:useState} } from 'react';",
      "",
      "interface ${2:Component}Props {",
      "  ${3:prop}: ${4:string};",
      "}",
      "",
      "export default function ${2:Component}({ ${3:prop} }: ${2:Component}Props) {",
      "  const [${5:state}, ${6:setState}] = useState${7:<string>}(${8:''});",
      "",
      "  return (",
      "    <div className=\"${9:}\">",
      "      ${10:Component content}",
      "    </div>",
      "  );",
      "}"
    ],
    "description": "Create a React client component with state"
  },
  "Custom Hook": {
    "scope": "typescript,typescriptreact",
    "prefix": "hook",
    "body": [
      "import { useState, useEffect } from 'react';",
      "",
      "interface Use${1:Hook}Return {",
      "  ${2:data}: ${3:unknown};",
      "  ${4:loading}: boolean;",
      "  ${5:error}: string | null;",
      "}",
      "",
      "export function use${1:Hook}(): Use${1:Hook}Return {",
      "  const [${2:data}, set${2/(.*)/${1:/capitalize}/}] = useState${6:<unknown>}(${7:null});",
      "  const [${4:loading}, set${4/(.*)/${1:/capitalize}/}] = useState(false);",
      "  const [${5:error}, set${5/(.*)/${1:/capitalize}/}] = useState<string | null>(null);",
      "",
      "  useEffect(() => {",
      "    ${8:// Hook logic}",
      "  }, []);",
      "",
      "  return { ${2:data}, ${4:loading}, ${5:error} };",
      "}"
    ],
    "description": "Create a custom React hook"
  },
  "API Route Handler": {
    "scope": "typescript",
    "prefix": "api",
    "body": [
      "import { NextRequest, NextResponse } from 'next/server';",
      "",
      "export async function ${1:GET}(request: NextRequest) {",
      "  try {",
      "    ${2:// API logic}",
      "    ",
      "    return NextResponse.json({ ${3:success: true} });",
      "  } catch (error) {",
      "    console.error('API Error:', error);",
      "    return NextResponse.json(",
      "      { error: '${4:Internal Server Error}' },",
      "      { status: 500 }",
      "    );",
      "  }",
      "}"
    ],
    "description": "Create a Next.js API route handler"
  },
  "Server Action": {
    "scope": "typescript",
    "prefix": "action",
    "body": [
      "'use server';",
      "",
      "import { revalidatePath } from 'next/cache';",
      "",
      "export async function ${1:actionName}(formData: FormData) {",
      "  try {",
      "    ${2:// Server action logic}",
      "    ",
      "    revalidatePath('${3:/}');",
      "    return { success: true };",
      "  } catch (error) {",
      "    console.error('Server Action Error:', error);",
      "    return { error: '${4:Something went wrong}' };",
      "  }",
      "}"
    ],
    "description": "Create a Next.js server action"
  }
}
```

## 📦 PASO 5: ACTUALIZAR PACKAGE.JSON

Agregar estos scripts adicionales al package.json:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf .next out dist",
    "preview": "pnpm build && pnpm start",
    "dev:debug": "NODE_OPTIONS='--inspect' next dev --turbopack"
  }
}
```

## ✅ PASO 6: VERIFICACIÓN FINAL

```bash
# Verificar que todo funcione correctamente
pnpm type-check    # Verificar TypeScript
pnpm lint          # Verificar ESLint
pnpm format        # Formatear código
pnpm dev           # Iniciar servidor de desarrollo
```

## 🎨 CARACTERÍSTICAS IMPLEMENTADAS

### ✨ Desarrollo Moderno

- ⚡ Next.js 15 con Turbopack (compilación ultra-rápida)
- 🎯 TypeScript para type safety
- 🎨 Tailwind CSS v4 para styling moderno
- 📱 Diseño responsive por defecto
- 🔧 ESLint + Prettier configurados

### 🛠️ Herramientas de Desarrollo

- 🚀 Snippets personalizados para desarrollo rápido
- 🔍 Configuración completa de VS Code
- 📝 Reglas de AI para asistentes inteligentes
- 🎯 Scripts de npm optimizados
- 📦 Gestión de dependencias con pnpm

### 🏗️ Arquitectura Profesional

- 📁 Estructura de directorios escalable
- 🧩 Utilidades reutilizables (cn, formatDate, etc.)
- 🏷️ Sistema de tipos TypeScript robusto
- 🎨 Patrones de componentes React modernos
- 🚀 Configuración de rendimiento optimizada

### 🔧 Configuración de Calidad

- ✅ Linting automático al guardar
- 🎨 Formateo de código consistente
- 🔍 IntelliSense para Tailwind CSS
- 📊 Verificación de tipos en tiempo real
- 🚨 Detección de errores proactiva

## 🚀 COMANDOS RÁPIDOS POST-SETUP

```bash
# Desarrollo
pnpm dev          # Servidor con Turbopack
pnpm build        # Build de producción
pnpm type-check   # Verificar tipos
pnpm lint         # Revisar código
pnpm format       # Formatear archivos

# Utilidades
pnpm clean        # Limpiar builds
pnpm preview      # Preview de producción
```

## 📚 PRÓXIMOS PASOS RECOMENDADOS

1. 🎨 Configurar tema personalizado de Tailwind
2. 🔐 Implementar autenticación (NextAuth.js)
3. 🗃️ Configurar base de datos (Prisma + PostgreSQL)
4. 🧪 Agregar testing (Vitest + Testing Library)
5. 🚀 Configurar deployment (Vercel)
6. 📊 Implementar analytics y monitoring

## ⚠️ NOTAS IMPORTANTES

- ✅ Verificar que Node.js 18.18+ esté instalado
- ✅ Asegurar que pnpm esté disponible globalmente
- ✅ Configurar Git antes del primer commit
- ✅ Revisar variables de entorno antes de producción
- ✅ Instalar extensiones de VS Code recomendadas

---

**🎉 ¡PROYECTO LISTO! Tu aplicación Next.js 15 está configurada con las mejores prácticas del ecosistema React/Next.js moderno.**
