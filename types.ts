export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  priceRange: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
