import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Services } from './services';

describe('Services', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Services],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Services);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have 9 services', () => {
    const fixture = TestBed.createComponent(Services);
    expect(fixture.componentInstance.services.length).toBe(9);
  });

  it('should contain AI Applications service', () => {
    const fixture = TestBed.createComponent(Services);
    const aiApp = fixture.componentInstance.services.find(s => s.id === 'ai-applications');
    expect(aiApp).toBeDefined();
    expect(aiApp?.name).toBe('AI Applications');
  });

  it('should contain AI Chatbots service', () => {
    const fixture = TestBed.createComponent(Services);
    const chatbot = fixture.componentInstance.services.find(s => s.id === 'ai-chatbots');
    expect(chatbot).toBeDefined();
    expect(chatbot?.tag).toBe('Core');
  });

  it('should contain Mobile Applications service', () => {
    const fixture = TestBed.createComponent(Services);
    const mobile = fixture.componentInstance.services.find(s => s.id === 'mobile-applications');
    expect(mobile).toBeDefined();
    expect(mobile?.tag).toBe('Cross-Platform');
  });

  it('should render service cards', () => {
    const fixture = TestBed.createComponent(Services);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('.service-card');
    expect(cards.length).toBe(9);
  });

  it('each service should have id, name, icon, tag, and description', () => {
    const fixture = TestBed.createComponent(Services);
    fixture.componentInstance.services.forEach(service => {
      expect(service.id).toBeTruthy();
      expect(service.name).toBeTruthy();
      expect(service.icon).toBeTruthy();
      expect(service.tag).toBeTruthy();
      expect(service.description).toBeTruthy();
    });
  });
});
