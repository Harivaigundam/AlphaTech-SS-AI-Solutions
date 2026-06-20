import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  id: string;
  name: string;
  icon: string;
  tag: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  services: Service[] = [
    {
      id: 'ai-applications',
      name: 'AI Applications',
      icon: '🤖',
      tag: 'Core',
      description: 'Custom ML models, NLP, prediction systems tailored to your domain.'
    },
    {
      id: 'ai-chatbots',
      name: 'AI Chatbots',
      icon: '💬',
      tag: 'Core',
      description: 'Conversational agents, support automation, 24/7 customer service.'
    },
    {
      id: 'ai-search',
      name: 'AI Search',
      icon: '🔍',
      tag: 'Core',
      description: 'Semantic search engines, vector databases, intelligent retrieval.'
    },
    {
      id: 'document-qa',
      name: 'Document Q&A',
      icon: '📄',
      tag: 'AI',
      description: 'Intelligent document parsing, extraction, and question answering.'
    },
    {
      id: 'rag-applications',
      name: 'RAG Applications',
      icon: '🧠',
      tag: 'AI',
      description: 'Retrieval-augmented generation, knowledge grounding, accurate AI.'
    },
    {
      id: 'web-applications',
      name: 'Web Applications',
      icon: '🌐',
      tag: 'Full-Stack',
      description: 'Modern full-stack web applications, APIs, and microservices.'
    },
    {
      id: 'crm-solutions',
      name: 'CRM Solutions',
      icon: '📊',
      tag: 'Enterprise',
      description: 'Customer relationship management, sales pipelines, analytics.'
    },
    {
      id: 'business-portals',
      name: 'Business Portals',
      icon: '🏢',
      tag: 'Enterprise',
      description: 'Dashboards, admin panels, internal tools, reporting systems.'
    },
    {
      id: 'mobile-applications',
      name: 'Mobile Applications',
      icon: '📱',
      tag: 'Cross-Platform',
      description: 'iOS, Android, cross-platform native and hybrid applications.'
    }
  ];
}
