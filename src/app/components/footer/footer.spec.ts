import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Footer } from './footer';
import { vi } from 'vitest';

describe('Footer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Footer);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have showToast = false initially', () => {
    const fixture = TestBed.createComponent(Footer);
    expect(fixture.componentInstance.showToast).toBe(false);
  });

  it('should have showPricing = false initially', () => {
    const fixture = TestBed.createComponent(Footer);
    expect(fixture.componentInstance.showPricing).toBe(false);
  });

  it('should show connect toast', () => {
    const fixture = TestBed.createComponent(Footer);
    const event = new Event('click');
    vi.spyOn(event, 'preventDefault');
    fixture.componentInstance.showConnectToast(event);
    expect(fixture.componentInstance.showToast).toBe(true);
  });

  it('should hide connect toast', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.componentInstance.showToast = true;
    fixture.componentInstance.hideToast();
    expect(fixture.componentInstance.showToast).toBe(false);
  });

  it('should show pricing toast', () => {
    const fixture = TestBed.createComponent(Footer);
    const event = new Event('click');
    vi.spyOn(event, 'preventDefault');
    fixture.componentInstance.showPricingToast(event);
    expect(fixture.componentInstance.showPricing).toBe(true);
  });

  it('should hide pricing toast', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.componentInstance.showPricing = true;
    fixture.componentInstance.hidePricing();
    expect(fixture.componentInstance.showPricing).toBe(false);
  });

  it('should render the logo', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.logo-text')?.textContent).toContain('Alpha Tech');
  });

  it('should render 4 footer columns', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();
    const columns = fixture.nativeElement.querySelectorAll('.footer-column');
    expect(columns.length).toBe(4);
  });

  it('should render copyright text', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.copyright')?.textContent).toContain('2026 Alpha Tech');
  });
});
