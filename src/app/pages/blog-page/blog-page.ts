import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { BLOG_POSTS } from './blog-data';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule, RouterLink, Header, Footer],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss'
})
export class BlogPage {
  posts = BLOG_POSTS;
}
