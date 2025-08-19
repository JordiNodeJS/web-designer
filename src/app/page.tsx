import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl p-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Web Designer</h1>
        <p className="text-muted-foreground mb-8 text-xl">
          Professional web design platform powered by shadcn/ui
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card de ejemplo */}
        <Card>
          <CardHeader>
            <CardTitle>Design Components</CardTitle>
            <CardDescription>
              Modern UI components built with Radix UI and Tailwind CSS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Get Started</Button>
          </CardContent>
        </Card>

        {/* Card con formulario */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>
              Beautiful forms with built-in validation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <Button className="w-full" variant="outline">
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Card de features */}
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>What makes this platform special</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                TypeScript support
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                Dark mode ready
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                Fully accessible
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                Customizable themes
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">Primary Action</Button>
          <Button variant="outline" size="lg">
            Secondary Action
          </Button>
          <Button variant="ghost" size="lg">
            Ghost Action
          </Button>
        </div>
      </div>
    </div>
  );
}
