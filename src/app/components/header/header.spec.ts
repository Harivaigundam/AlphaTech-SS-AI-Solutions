import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';

describe('Header', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Header);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have isScrolled = false initially', () => {
    const fixture = TestBed.createComponent(Header);
    expect(fixture.componentInstance.isScrolled).toBe(false);
  });

  it('should have menuOpen = false initially', () => {
    const fixture = TestBed.createComponent(Header);
    expect(fixture.componentInstance.menuOpen).toBe(false);
  });

  it('should toggle menu open', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.componentInstance.toggleMenu();
    expect(fixture.componentInstance.menuOpen).toBe(true);
  });

  it('should toggle menu closed', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.componentInstance.toggleMenu();
    fixture.componentInstance.toggleMenu();
    expect(fixture.componentInstance.menuOpen).toBe(false);
  });

  it('should close menu', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.componentInstance.menuOpen = true;
    fixture.componentInstance.closeMenu();
    expect(fixture.componentInstance.menuOpen).toBe(false);
  });

  it('should render the logo text', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.logo-text')?.textContent).toContain('Alpha Tech');
  });

  it('should render the logo mark with AT', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.logo-mark')?.textContent).toContain('AT');
  });

  it('should render navigation links', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    const navLinks = fixture.nativeElement.querySelectorAll('.nav-link');
    expect(navLinks.length).toBe(4);
  });

  it('should have contact button', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.btn-primary')).toBeTruthy();
  });
});
