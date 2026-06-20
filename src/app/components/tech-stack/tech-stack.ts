import { Component } from '@angular/core';

interface TechCategory {
  name: string;
  technologies: string[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss'
})
export class TechStack {
  techCategories: TechCategory[] = [
    {
      name: 'Frontend',
      technologies: ['React', 'Angular', 'Next.js', 'TypeScript']
    },
    {
      name: 'Backend',
      technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL']
    },
    {
      name: 'AI / ML',
      technologies: ['OpenAI', 'LangChain', 'Pinecone', 'HuggingFace']
    },
    {
      name: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      name: 'Cloud',
      technologies: ['AWS', 'Azure', 'GCP', 'Vercel']
    },
    {
      name: 'DevOps',
      technologies: ['Docker', 'K8s', 'CI/CD', 'Terraform']
    }
  ];
}
