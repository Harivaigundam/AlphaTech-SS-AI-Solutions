import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AiDashboardPreview } from '../ai-dashboard-preview/ai-dashboard-preview';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, AiDashboardPreview],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  scrollToContact() {
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
