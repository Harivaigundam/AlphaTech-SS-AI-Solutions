import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServicesPage } from './services-page';

describe('ServicesPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ServicesPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render header', () => {
    const fixture = TestBed.createComponent(ServicesPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-header')).toBeTruthy();
  });

  it('should render footer', () => {
    const fixture = TestBed.createComponent(ServicesPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-footer')).toBeTruthy();
  });

  it('should render page hero title', () => {
    const fixture = TestBed.createComponent(ServicesPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.page-title')?.textContent).toContain('What we build');
  });
});
