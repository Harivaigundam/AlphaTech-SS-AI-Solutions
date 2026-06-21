import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Hero } from './hero';

describe('Hero', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Hero);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the hero badge', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.badge-text')?.textContent).toContain('AI-Powered Development');
  });

  it('should render the hero title', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.hero-title')?.textContent).toContain('Build intelligent software');
  });

  it('should render the hero subtitle', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.hero-subtitle')?.textContent).toContain('AI applications, chatbots');
  });

  it('should have Start Your Project CTA button', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.btn-primary')?.textContent).toContain('Start Your Project');
  });

  it('should have View Our Work link', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.btn-secondary')?.textContent).toContain('View Our Work');
  });

  it('should render the AI dashboard preview', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-ai-dashboard-preview')).toBeTruthy();
  });
});
