import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface SolutionCard {
  id: string;
  title: string;
  tag: string;
  description: string;
  icon: string;
  link: string;
  isExternal: boolean;
  showPricingModal: boolean;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss'
})
export class Solutions {
  showPricingToast = false;

  solutions: SolutionCard[] = [
    {
      id: 'case-studies',
      title: 'Case Studies',
      tag: 'Portfolio',
      description: 'Explore our work. Real projects, real results, real impact across industries.',
      icon: '📊',
      link: '/solutions',
      isExternal: false,
      showPricingModal: false
    },
    {
      id: 'documentation',
      title: 'Documentation',
      tag: 'Resources',
      description: 'Technical guides, API references, and integration tutorials for developers.',
      icon: '📚',
      link: 'https://docs.alphatechss.com',
      isExternal: true,
      showPricingModal: false
    },
    {
      id: 'pricing',
      title: 'Pricing',
      tag: 'Plans',
      description: 'Transparent pricing for every stage. From startups to enterprise solutions.',
      icon: '💎',
      link: '',
      isExternal: false,
      showPricingModal: true
    }
  ];

  handleCardClick(solution: SolutionCard) {
    if (solution.showPricingModal) {
      this.showPricingToast = true;
    }
  }

  closePricingToast() {
    this.showPricingToast = false;
  }
}
