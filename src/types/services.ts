export interface ServiceExtra {
  id: string;
  name: string;
  description: string;
  price: number;
  isPercentage?: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  timeframe: string;
  features: string[];
  addons: ServiceExtra[];
  category: 'web' | 'ecommerce' | 'app' | 'marketing';
  technologies: string[];
  popular?: boolean;
}

export interface QuoteRequest {
  id: string;
  serviceId: string;
  clientInfo: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
  };
  selectedExtras: string[];
  customRequests?: string;
  totalPrice: number;
  status: 'pending' | 'approved' | 'rejected' | 'in-progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface CalculatorState {
  selectedService: Service | null;
  selectedExtras: string[];
  customRequests: string;
  totalPrice: number;
}
