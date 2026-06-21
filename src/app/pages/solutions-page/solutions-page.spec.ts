import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SolutionsPage } from './solutions-page';

describe('SolutionsPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(SolutionsPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render header', () => {
    const fixture = TestBed.createComponent(SolutionsPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-header')).toBeTruthy();
  });

  it('should render footer', () => {
    const fixture = TestBed.createComponent(SolutionsPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-footer')).toBeTruthy();
  });

  it('should render page hero title', () => {
    const fixture = TestBed.createComponent(SolutionsPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.page-title')?.textContent).toContain('Featured solutions');
  });
});
