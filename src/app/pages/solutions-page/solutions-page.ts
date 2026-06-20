import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

interface Stat {
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  industry: string;
  description: string;
  preview: string;
  stats: Stat[];
}

@Component({
  selector: 'app-solutions-page',
  standalone: true,
  imports: [CommonModule, RouterLink, Header, Footer],
  templateUrl: './solutions-page.html',
  styleUrl: './solutions-page.scss'
})
export class SolutionsPage {
  caseStudies: CaseStudy[] = [
    {
      id: 'ai-customer-support',
      title: 'AI-Powered Customer Support',
      tag: 'AI Chatbots',
      industry: 'Enterprise',
      description: 'Enterprise chatbot handling 10K+ queries daily with 95% resolution rate. Reduced support costs by 60% while improving customer satisfaction scores.',
      preview: 'Solution Preview — AI Customer Support',
      stats: [
        { value: '10K+', label: 'Daily Queries' },
        { value: '95%', label: 'Resolution Rate' },
        { value: '60%', label: 'Cost Reduction' }
      ]
    },
    {
      id: 'smart-document-processing',
      title: 'Smart Document Processing',
      tag: 'Document Q&A',
      industry: 'Legal',
      description: 'Automated document Q&A system for legal firm, reducing review time by 60%. AI-powered extraction and analysis of legal documents.',
      preview: 'Solution Preview — Smart Document Processing',
      stats: [
        { value: '60%', label: 'Time Saved' },
        { value: '99%', label: 'Accuracy' },
        { value: '500K+', label: 'Documents Processed' }
      ]
    },
    {
      id: 'rag-knowledge-base',
      title: 'RAG Knowledge Base',
      tag: 'RAG',
      industry: 'Enterprise',
      description: 'Enterprise knowledge retrieval system with 99% accuracy across 1M+ documents. Grounded AI responses with source attribution.',
      preview: 'Solution Preview — RAG Knowledge Base',
      stats: [
        { value: '1M+', label: 'Documents' },
        { value: '99%', label: 'Accuracy' },
        { value: '3s', label: 'Avg Response' }
      ]
    },
    {
      id: 'mobile-ai-assistant',
      title: 'Mobile AI Assistant',
      tag: 'Mobile',
      industry: 'Consumer',
      description: 'Cross-platform mobile app with on-device AI for personalized recommendations. 50K+ downloads in first month.',
      preview: 'Solution Preview — Mobile AI Assistant',
      stats: [
        { value: '50K+', label: 'Downloads' },
        { value: '4.8', label: 'App Rating' },
        { value: '85%', label: 'Retention' }
      ]
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
