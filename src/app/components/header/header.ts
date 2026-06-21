import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {
  isScrolled = false;
  menuOpen = false;
  isMobile = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkMobile();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMenu();
    });
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
    if (!this.isMobile && this.menuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.menuOpen) {
      this.closeMenu();
    }
  }

  private checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }

  scrollToContact(event: Event) {
    event.preventDefault();
    this.closeMenu();

    if (this.router.url === '/' || this.router.url === '') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
}
