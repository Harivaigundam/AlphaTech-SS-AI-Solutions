import { Component } from '@angular/core';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [],
  templateUrl: './process.html',
  styleUrl: './process.scss'
})
export class Process {
  steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery & Plan',
      description: 'We map your needs, goals, and technical requirements.'
    },
    {
      number: '02',
      title: 'Design & Prototype',
      description: 'Rapid prototyping and UX design with stakeholder feedback.'
    },
    {
      number: '03',
      title: 'Build & Test',
      description: 'Agile sprints with bi-weekly demos and QA testing.'
    },
    {
      number: '04',
      title: 'Deploy & Scale',
      description: 'Cloud hosting, monitoring, and ongoing optimization.'
    }
  ];
}
