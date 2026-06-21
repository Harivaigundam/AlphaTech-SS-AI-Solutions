import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AboutPage } from './about-page';

describe('AboutPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AboutPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render header', () => {
    const fixture = TestBed.createComponent(AboutPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-header')).toBeTruthy();
  });

  it('should render footer', () => {
    const fixture = TestBed.createComponent(AboutPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-footer')).toBeTruthy();
  });

  it('should render page hero title', () => {
    const fixture = TestBed.createComponent(AboutPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.page-title')?.textContent).toContain('We build the future');
  });
});
