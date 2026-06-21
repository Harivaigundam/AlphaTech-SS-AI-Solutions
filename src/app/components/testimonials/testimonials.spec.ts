import { TestBed } from '@angular/core/testing';
import { Testimonials } from './testimonials';

describe('Testimonials', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimonials]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Testimonials);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have 4 testimonials', () => {
    const fixture = TestBed.createComponent(Testimonials);
    expect(fixture.componentInstance.testimonials.length).toBe(4);
  });

  it('each testimonial should have name, role, and quote', () => {
    const fixture = TestBed.createComponent(Testimonials);
    fixture.componentInstance.testimonials.forEach(t => {
      expect(t.name).toBeTruthy();
      expect(t.role).toBeTruthy();
      expect(t.quote).toBeTruthy();
    });
  });

  it('should contain James Wilson testimonial', () => {
    const fixture = TestBed.createComponent(Testimonials);
    const james = fixture.componentInstance.testimonials.find(t => t.name === 'James Wilson');
    expect(james).toBeDefined();
    expect(james?.role).toBe('CEO, RetailCo');
  });

  it('should render testimonial cards', () => {
    const fixture = TestBed.createComponent(Testimonials);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('.testimonial-card');
    expect(cards.length).toBe(4);
  });
});
