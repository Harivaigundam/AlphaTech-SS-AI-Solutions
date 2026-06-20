import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

interface ProcessStep {
  number: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
  preview: string;
}

interface EngagementModel {
  type: string;
  name: string;
  description: string;
  features: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-process-page',
  standalone: true,
  imports: [CommonModule, RouterLink, Header, Footer],
  templateUrl: './process-page.html',
  styleUrl: './process-page.scss'
})
export class ProcessPage {
  steps: ProcessStep[] = [
    {
      number: '01',
      duration: 'Week 1-2',
      title: 'Discovery & Planning',
      description: 'We map your needs, goals, and technical requirements. Deep dive into your business domain, user personas, and success metrics.',
      deliverables: ['Stakeholder Interviews', 'Requirements Doc', 'Technical Audit', 'Project Roadmap'],
      preview: 'Discovery Workshop Visual'
    },
    {
      number: '02',
      duration: 'Week 3-4',
      title: 'Design & Prototype',
      description: 'Rapid prototyping and UX design with stakeholder feedback. Wireframes, mockups, and interactive prototypes before any code.',
      deliverables: ['Wireframes', 'UI Mockups', 'Interactive Prototype', 'Design System'],
      preview: 'Design Prototype Visual'
    },
    {
      number: '03',
      duration: 'Week 5-10',
      title: 'Build & Test',
      description: 'Agile sprints with bi-weekly demos and QA testing. Continuous integration, code reviews, and automated testing.',
      deliverables: ['Sprint Demos', 'Code Reviews', 'QA Testing', 'Performance Audit'],
      preview: 'Development Sprint Visual'
    },
    {
      number: '04',
      duration: 'Week 11-12',
      title: 'Deploy & Scale',
      description: 'Cloud hosting, monitoring, and ongoing optimization. Production deployment, infrastructure setup, and support handoff.',
      deliverables: ['Production Deploy', 'Monitoring Setup', 'Documentation', 'Support Handoff'],
      preview: 'Deployment Dashboard Visual'
    }
  ];

  engagementModels: EngagementModel[] = [
    {
      type: 'Fixed Price',
      name: 'Project-Based',
      description: 'Clear scope, timeline, and budget. Best for well-defined projects with specific requirements.',
      features: ['Defined deliverables', 'Milestone payments', 'Full documentation']
    },
    {
      type: 'Time & Materials',
      name: 'Dedicated Team',
      description: 'Flexible scope with a dedicated team. Best for ongoing projects with evolving requirements.',
      features: ['Flexible scope', 'Weekly billing', 'Direct communication']
    },
    {
      type: 'Retainer',
      name: 'Ongoing Support',
      description: 'Monthly retainer for continuous development and support. Best for long-term partnerships.',
      features: ['Priority support', 'Monthly reports', 'SLA guarantees']
    }
  ];

  faqs: FAQ[] = [
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects take 8-12 weeks from discovery to deployment. Simple MVPs can be delivered in 4-6 weeks, while complex enterprise solutions may take 3-6 months.'
    },
    {
      question: "What's your pricing structure?",
      answer: 'We offer fixed-price, time & materials, and retainer models. Project costs range from $25K for MVPs to $500K+ for enterprise solutions. Contact us for a custom quote.'
    },
    {
      question: 'Do you work with startups?',
      answer: 'Yes. We work with startups, SMBs, and enterprises. Our flexible engagement models accommodate different budgets and timelines.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern stacks: React, Next.js, Node.js, Python, Go for backend. For AI: OpenAI, LangChain, Pinecone. Cloud: AWS, Azure, GCP. See our full tech stack page.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes. We offer retainer-based ongoing support, maintenance, and feature development. Most clients transition to a monthly retainer after launch.'
    }
  ];

  scrollToContact() {
    window.location.href = '/#contact';
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
