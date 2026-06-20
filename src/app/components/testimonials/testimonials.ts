import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      name: 'James Wilson',
      role: 'CEO, RetailCo',
      quote: 'Alpha Tech transformed our customer support. Response time dropped by 70%.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO, TechStart',
      quote: 'The AI chatbot they built handles 80% of our queries autonomously. Game changer.'
    },
    {
      name: 'Maria Garcia',
      role: 'Founder, HealthApp',
      quote: 'Professional, fast, and delivered exactly what we needed. Highly recommend.'
    },
    {
      name: 'Dr. Robert Kim',
      role: 'Director, EduLearn',
      quote: 'They understood our education platform needs perfectly. Students love the new system.'
    }
  ];
}
