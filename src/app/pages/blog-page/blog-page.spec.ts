import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BlogPage } from './blog-page';

describe('BlogPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(BlogPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render header', () => {
    const fixture = TestBed.createComponent(BlogPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-header')).toBeTruthy();
  });

  it('should render footer', () => {
    const fixture = TestBed.createComponent(BlogPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-footer')).toBeTruthy();
  });

  it('should render page hero title', () => {
    const fixture = TestBed.createComponent(BlogPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.page-title')?.textContent).toContain('Insights');
  });
});
