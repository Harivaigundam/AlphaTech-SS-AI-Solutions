import { TestBed } from '@angular/core/testing';
import { AiDashboardPreview } from './ai-dashboard-preview';

describe('AiDashboardPreview', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiDashboardPreview]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AiDashboardPreview);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the dashboard container', () => {
    const fixture = TestBed.createComponent(AiDashboardPreview);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.dashboard-preview')).toBeTruthy();
  });
});
