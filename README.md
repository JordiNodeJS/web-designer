# Web Designer Project

A modern web designer platform built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. This project provides a comprehensive foundation for building sophisticated web design tools and interfaces with beautiful, accessible UI components.

## 🚀 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **UI Components**: shadcn/ui (new-york style, neutral theme)
- **Styling**: Tailwind CSS v4
- **Theming**: next-themes (dark/light mode)
- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js config
- **Runtime**: React 19

## ✨ Features

- ⚡ Next.js 15 with Turbopack for blazing fast development
- 🎨 shadcn/ui components with modern design system
- 🌙 Dark/Light mode support with next-themes
- 📱 Fully responsive design
- ♿ Accessible components built on Radix UI
- 🔧 TypeScript for type safety
- 🎯 ESLint configuration for code quality
- 📁 Well-organized project structure
- 🚀 Optimized for performance and SEO

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.18+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd web-designer
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 shadcn/ui Components

This project uses shadcn/ui for consistent, accessible UI components. The setup includes:

### Current Configuration

- **Style**: new-york
- **Base Color**: neutral
- **CSS Variables**: enabled
- **TypeScript**: enabled
- **Theme Support**: dark/light mode with next-themes

### Installed Components

- `button` - Buttons with multiple variants (default, outline, ghost, etc.)
- `card` - Card components with header, content, and description
- `input` - Form input fields
- `label` - Form labels

### Adding New Components

To add a new shadcn/ui component:

```bash
# Install a specific component
pnpm dlx shadcn@latest add dialog

# Install multiple components
pnpm dlx shadcn@latest add dropdown-menu tooltip select

# See all available components
pnpm dlx shadcn@latest add
```

### Usage Examples

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Theming

The project includes automatic dark/light mode switching:

```tsx
// Theme is automatically applied via ThemeProvider in layout.tsx
// Components automatically adapt to the current theme
```

## 📁 Project Structure

```
web-designer/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable UI components
│   ├── lib/                # Utility functions and configurations
│   ├── hooks/              # Custom React hooks
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
├── .vscode/               # VS Code configuration
├── .cursorrules           # AI assistant rules
└── ...config files
```

## 🎯 AI Assistant Configuration

This project includes comprehensive AI assistant rules (`.cursorrules`) that help with:

- Code style and conventions
- TypeScript best practices
- Next.js App Router patterns
- Tailwind CSS guidelines
- Performance optimization tips
- Accessibility standards

### VS Code Extensions

Recommended extensions are automatically suggested when opening the project:

- Tailwind CSS IntelliSense
- Prettier
- ESLint
- TypeScript
- GitHub Copilot

## 🚀 Development Workflow

### Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues

# Type checking
pnpm type-check   # Run TypeScript compiler check
```

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write self-documenting code
- Use Tailwind CSS utility classes
- Follow accessibility guidelines

## 🎨 Styling Guidelines

This project uses Tailwind CSS v4 for styling:

- Utility-first approach
- Responsive design by default
- Custom design system integration
- Dark mode support ready
- Component-based architecture

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

### Tailwind CSS

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)

### TypeScript

- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to [Vercel](https://vercel.com)
2. Configure environment variables if needed
3. Deploy automatically on every push

### Other Platforms

This project can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- AWS
- Google Cloud Platform
- Digital Ocean

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Happy coding! 🎉**
