import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface TeamStat {
  number: string;
  label: string;
}

@Component({
  selector: 'app-careers-page',
  standalone: true,
  imports: [CommonModule, RouterLink, Header, Footer],
  templateUrl: './careers-page.html',
  styleUrl: './careers-page.scss'
})
export class CareersPage {
  teamStats: TeamStat[] = [
    { number: '50+', label: 'Team Members' },
    { number: '12', label: 'Countries' },
    { number: '4.9', label: 'Glassdoor Rating' },
    { number: '95%', label: 'Retention Rate' }
  ];

  values: Value[] = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We push boundaries and challenge the status quo. Every team member has the freedom to experiment and innovate.'
    },
    {
      icon: '🤝',
      title: 'Collaborative Spirit',
      description: 'We believe in the power of teamwork. Cross-functional collaboration is at the heart of everything we do.'
    },
    {
      icon: '📈',
      title: 'Growth Mindset',
      description: 'We invest in our people. Continuous learning and professional development are part of our DNA.'
    },
    {
      icon: '🎯',
      title: 'Impact Driven',
      description: 'We measure success by the impact we create. Every project matters, every contribution counts.'
    }
  ];

  benefits: Benefit[] = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Top-tier compensation packages benchmarked against industry leaders.'
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and vision coverage for you and your family.'
    },
    {
      icon: '🏠',
      title: 'Remote Flexible',
      description: 'Work from anywhere. We trust our team to deliver results regardless of location.'
    },
    {
      icon: '📚',
      title: 'Learning Budget',
      description: '$5,000 annual learning budget for courses, conferences, and books.'
    },
    {
      icon: '🌴',
      title: 'Unlimited PTO',
      description: 'Take the time you need. We believe in work-life balance and trust our team.'
    },
    {
      icon: '📈',
      title: 'Equity Options',
      description: 'Stock options for all employees. Grow with us and share in our success.'
    },
    {
      icon: '💻',
      title: 'Latest Equipment',
      description: 'MacBook Pro, standing desk, and any tools you need to do your best work.'
    },
    {
      icon: '🎉',
      title: 'Team Events',
      description: 'Quarterly retreats, team dinners, and regular social events to bond as a team.'
    }
  ];

  jobs: Job[] = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$180K - $250K',
      description: 'Design and implement cutting-edge AI solutions. Work with LLMs, build RAG systems, and deploy production ML pipelines.',
      requirements: ['5+ years ML/AI experience', 'Python, PyTorch, TensorFlow', 'LLM fine-tuning & deployment', 'Strong system design skills']
    },
    {
      id: 'full-stack-developer',
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$150K - $200K',
      description: 'Build end-to-end web applications using modern frameworks. Collaborate with designers and AI engineers to ship product features.',
      requirements: ['4+ years full stack development', 'React, Next.js, Node.js', 'TypeScript proficiency', 'Experience with cloud services']
    },
    {
      id: 'product-designer',
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130K - $180K',
      description: 'Shape the user experience of AI-powered products. Create intuitive interfaces that make complex technology accessible.',
      requirements: ['3+ years product design', 'Figma expertise', 'Design systems experience', 'User research skills']
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$140K - $190K',
      description: 'Build and maintain scalable cloud infrastructure. Implement CI/CD pipelines and ensure 99.99% uptime.',
      requirements: ['3+ years DevOps experience', 'AWS/GCP/Azure expertise', 'Kubernetes & Docker', 'Terraform/IaC']
    },
    {
      id: 'ai-research-scientist',
      title: 'AI Research Scientist',
      department: 'Research',
      location: 'Remote',
      type: 'Full-time',
      salary: '$200K - $300K',
      description: 'Push the boundaries of AI capabilities. Publish papers, build prototypes, and transition research into production.',
      requirements: ['PhD in CS/ML preferred', 'Published research in top venues', 'Strong coding skills', 'Experience with LLMs']
    }
  ];

  selectedJob: Job | null = null;

  selectJob(job: Job) {
    this.selectedJob = this.selectedJob?.id === job.id ? null : job;
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
