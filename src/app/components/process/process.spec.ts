import { TestBed } from '@angular/core/testing';
import { Process } from './process';

describe('Process', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Process]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Process);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have 4 process steps', () => {
    const fixture = TestBed.createComponent(Process);
    expect(fixture.componentInstance.steps.length).toBe(4);
  });

  it('should have correct step numbers', () => {
    const fixture = TestBed.createComponent(Process);
    const steps = fixture.componentInstance.steps;
    expect(steps[0].number).toBe('01');
    expect(steps[1].number).toBe('02');
    expect(steps[2].number).toBe('03');
    expect(steps[3].number).toBe('04');
  });

  it('should have Discovery & Plan as first step', () => {
    const fixture = TestBed.createComponent(Process);
    expect(fixture.componentInstance.steps[0].title).toBe('Discovery & Plan');
  });

  it('should have Deploy & Scale as last step', () => {
    const fixture = TestBed.createComponent(Process);
    expect(fixture.componentInstance.steps[3].title).toBe('Deploy & Scale');
  });

  it('should render all step cards', () => {
    const fixture = TestBed.createComponent(Process);
    fixture.detectChanges();
    const stepCards = fixture.nativeElement.querySelectorAll('.process-card');
    expect(stepCards.length).toBe(4);
  });
});
