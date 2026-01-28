import { ServiceItem, Testimonial } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'bridal',
    title: 'Bridal & Formal Alterations',
    description: 'We do not just alter; we sculpt. From complex bustles and bodice resizing to delicate lace hem reconstruction, we ensure your gown fits flawlessly for your big moment.',
    image: 'https://images.unsplash.com/photo-1546193430-c2d207739ed7?q=80&w=800&auto=format&fit=crop',
    priceRange: 'Consultation Required'
  },
  {
    id: 'suiting',
    title: 'Suit Resizing & Tailoring',
    description: 'Modernize the fit of your favorite suit. We specialize in shoulder narrowing, sleeve shortening (with functional buttonholes), and tapering trousers for a contemporary silhouette.',
    image: '/menssuit.png',
    priceRange: 'Starts at $45'
  },
  {
    id: 'restoration',
    title: 'Vintage Restoration',
    description: 'Breathe new life into heirloom pieces. We delicately repair linings, replace hardware, and reinforce seams to preserve the integrity of vintage garments while making them wearable today.',
    image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=800&auto=format&fit=crop',
    priceRange: 'Quote upon inspection'
  },
  {
    id: 'denim',
    title: 'Denim & Casual Repair',
    description: 'Expert denim alteration using original hem techniques to maintain the designer wash. We also replace zippers, patch tears, and tailor leather jackets.',
    image: '/denim.png',
    priceRange: 'Starts at $25'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Bride',
    quote: "I bought a sample sale dress that was three sizes too big. V completely reconstructed the bodice. You would never know it wasn't made for me. She is a magician."
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Executive',
    quote: "The only place I trust with my Italian suits. Most tailors ruin the shoulder line when taking a jacket in; V understands the architecture of the garment perfectly."
  },
  {
    id: '3',
    name: 'Eleanor Ray',
    role: 'Vintage Collector',
    quote: "V restored a 1950s Chanel jacket for me that I thought was lost to moth damage. Her invisible mending technique is truly art."
  }
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "Do I need an appointment?",
    answer: "Yes. To ensure every garment receives the attention it deserves, we operate by appointment only. We strictly do not accept walk-ins for fittings."
  },
  {
    question: "How long will my alterations take?",
    answer: "Our standard turnaround time is 2 weeks. Please check the banner at the top of the site for the most current 'Ready By' date based on today's drop-offs. Bridal requires 6-8 weeks."
  },
  {
    question: "What should I bring to my fitting?",
    answer: "You MUST bring the exact shoes and undergarments (shapewear, bra) you plan to wear with the garment. We cannot pin a hem or fit a bodice accurately without them."
  },
  {
    question: "Can I get a price quote over the phone?",
    answer: "No. Pricing depends entirely on the construction of the garment (linings, boning, fabric type). We must see the item on your body to provide an accurate quote."
  },
  {
    question: "Do you offer rush services?",
    answer: "Rush services are available on a case-by-case basis depending on our current workload. A rush fee of 25-50% will apply."
  }
];

export const SYSTEM_INSTRUCTION = `
You are V, the proprietor and master seamstress of "Alterations by V". 
Your tone is warm, professional, sophisticated, and deeply knowledgeable about garment construction.
You are chatting with a potential client on your digital flagship website.

Key traits:
- You are the premier seamstress for all of Central Louisiana, based in Alexandria.
- You are an expert in *fitting* existing clothes to a human body (alterations), not just sewing.
- You explain *why* something works (e.g., "We need to lift the shoulders to remove that back crease").
- You NEVER give exact quotes without seeing the garment. Always give a wide range or say "It depends on the construction, please book a consultation."
- You are passionate about sustainability: saving old clothes is better than buying new ones.
- If asked about "Weiss", "Weiss Goldring" or the "Weiss store", acknowledge them as a wonderful inspiration for high-end retail experiences, but focus back on your alterations services.

Services: Bridal alterations, Suit resizing, Vintage restoration, Denim repair, Leather work.
Location: Alexandria, Louisiana (Central Louisiana).
`;