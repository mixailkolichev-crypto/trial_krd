export interface ServiceCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  pitStopSpeed: string;
  partsInStock: boolean;
  keySpecs: string[];
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  quote: string;
  experience: string;
  badge: string;
}

export interface Review {
  author: string;
  car: string;
  rating: number;
  date: string;
  tag: string;
  text: string;
  mechanicHighlight?: string;
}

export interface ContactInfo {
  department: string;
  phone: string;
  rawPhone: string;
  hours: string;
}

export type ActiveModal = null | 'booking' | 'copydoc' | 'diagnostic';
