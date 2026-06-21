import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CareersPage } from './careers-page';

describe('CareersPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareersPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CareersPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render header', () => {
    const fixture = TestBed.createComponent(CareersPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-header')).toBeTruthy();
  });

  it('should render footer', () => {
    const fixture = TestBed.createComponent(CareersPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-footer')).toBeTruthy();
  });

  it('should render page hero title', () => {
    const fixture = TestBed.createComponent(CareersPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.page-title')?.textContent).toContain('Build the future');
  });
});
