import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

interface ServiceDetail {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  preview: string;
  reversed: boolean;
}

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, RouterLink, Header, Footer],
  templateUrl: './services-page.html',
  styleUrl: './services-page.scss'
})
export class ServicesPage implements OnInit {
  services: ServiceDetail[] = [
    {
      id: 'ai-applications',
      icon: '🤖',
      title: 'AI Applications',
      description: 'Custom machine learning models, natural language processing, and predictive analytics tailored to your specific domain and business requirements.',
      features: [
        'Custom ML model development',
        'Natural language processing',
        'Predictive analytics',
        'Computer vision solutions'
      ],
      preview: 'AI Applications Preview',
      reversed: false
    },
    {
      id: 'ai-chatbots',
      icon: '💬',
      title: 'AI Chatbots',
      description: 'Conversational AI agents that handle customer support, automate workflows, and provide 24/7 intelligent assistance.',
      features: [
        'Multi-channel deployment',
        'Intent recognition & routing',
        'Human handoff capabilities',
        'Analytics & reporting'
      ],
      preview: 'Chatbot Preview',
      reversed: true
    },
    {
      id: 'ai-search',
      icon: '🔍',
      title: 'AI Search',
      description: 'Semantic search engines and vector databases that understand context and deliver highly relevant results.',
      features: [
        'Vector database integration',
        'Semantic understanding',
        'Real-time indexing',
        'Faceted search & filtering'
      ],
      preview: 'Search Preview',
      reversed: false
    },
    {
      id: 'document-qa',
      icon: '📄',
      title: 'Document Q&A',
      description: 'Intelligent document parsing, extraction, and question answering systems that understand your documents.',
      features: [
        'Multi-format support (PDF, DOCX, etc.)',
        'Entity extraction',
        'Contextual Q&A',
        'Batch processing'
      ],
      preview: 'Document Q&A Preview',
      reversed: true
    },
    {
      id: 'rag-applications',
      icon: '🧠',
      title: 'RAG Applications',
      description: 'Retrieval-augmented generation systems that ground AI responses in your proprietary knowledge base.',
      features: [
        'Knowledge base integration',
        'Context-aware generation',
        'Source attribution',
        'Accuracy optimization'
      ],
      preview: 'RAG Preview',
      reversed: false
    },
    {
      id: 'web-applications',
      icon: '🌐',
      title: 'Web Applications',
      description: 'Modern full-stack web applications, APIs, and microservices built with the latest technologies.',
      features: [
        'React / Next.js / Angular',
        'RESTful & GraphQL APIs',
        'Real-time capabilities',
        'Responsive design'
      ],
      preview: 'Web App Preview',
      reversed: true
    },
    {
      id: 'crm-solutions',
      icon: '📊',
      title: 'CRM Solutions',
      description: 'Customer relationship management systems with sales pipelines, analytics, and automation.',
      features: [
        'Contact management',
        'Sales pipeline tracking',
        'Automated workflows',
        'Reporting dashboards'
      ],
      preview: 'CRM Preview',
      reversed: false
    },
    {
      id: 'business-portals',
      icon: '🏢',
      title: 'Business Portals',
      description: 'Dashboards, admin panels, internal tools, and reporting systems for your organization.',
      features: [
        'Role-based access control',
        'Real-time dashboards',
        'Data visualization',
        'Custom reporting'
      ],
      preview: 'Portal Preview',
      reversed: true
    },
    {
      id: 'mobile-applications',
      icon: '📱',
      title: 'Mobile Applications',
      description: 'iOS, Android, and cross-platform mobile applications with native performance and modern UX.',
      features: [
        'React Native / Flutter',
        'Native iOS & Android',
        'Offline capabilities',
        'Push notifications'
      ],
      preview: 'Mobile App Preview',
      reversed: false
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        setTimeout(() => {
          const element = document.getElementById(params['id']);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });
  }

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
