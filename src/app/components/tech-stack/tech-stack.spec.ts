import { TestBed } from '@angular/core/testing';
import { TechStack } from './tech-stack';

describe('TechStack', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStack]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TechStack);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have 6 tech categories', () => {
    const fixture = TestBed.createComponent(TechStack);
    expect(fixture.componentInstance.techCategories.length).toBe(6);
  });

  it('should contain Frontend category', () => {
    const fixture = TestBed.createComponent(TechStack);
    const frontend = fixture.componentInstance.techCategories.find(c => c.name === 'Frontend');
    expect(frontend).toBeDefined();
    expect(frontend?.technologies).toContain('React');
    expect(frontend?.technologies).toContain('Angular');
  });

  it('should contain AI / ML category', () => {
    const fixture = TestBed.createComponent(TechStack);
    const aiml = fixture.componentInstance.techCategories.find(c => c.name === 'AI / ML');
    expect(aiml).toBeDefined();
    expect(aiml?.technologies).toContain('OpenAI');
  });

  it('each category should have name and technologies', () => {
    const fixture = TestBed.createComponent(TechStack);
    fixture.componentInstance.techCategories.forEach(cat => {
      expect(cat.name).toBeTruthy();
      expect(cat.technologies.length).toBeGreaterThan(0);
    });
  });

  it('should render category cards', () => {
    const fixture = TestBed.createComponent(TechStack);
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('.tech-card');
    expect(cards.length).toBe(6);
  });
});
