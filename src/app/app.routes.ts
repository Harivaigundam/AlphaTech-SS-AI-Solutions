import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ServicesPage } from './pages/services-page/services-page';
import { SolutionsPage } from './pages/solutions-page/solutions-page';
import { ProcessPage } from './pages/process-page/process-page';
import { AboutPage } from './pages/about-page/about-page';
import { CareersPage } from './pages/careers-page/careers-page';
import { BlogPage } from './pages/blog-page/blog-page';
import { BlogDetail } from './pages/blog-detail/blog-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'services', component: ServicesPage },
  { path: 'solutions', component: SolutionsPage },
  { path: 'process', component: ProcessPage },
  { path: 'about', component: AboutPage },
  { path: 'careers', component: CareersPage },
  { path: 'blog', component: BlogPage },
  { path: 'blog/:id', component: BlogDetail },
  { path: '**', redirectTo: '' }
];
