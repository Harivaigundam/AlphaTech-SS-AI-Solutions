import { TestBed } from '@angular/core/testing';
import { Contact } from './contact';
import { Email } from '../../services/email';
import { vi } from 'vitest';

describe('Contact', () => {
  let emailSpy: { sendEmail: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    emailSpy = { sendEmail: vi.fn().mockResolvedValue(true) };

    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [{ provide: Email, useValue: emailSpy }]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Contact);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have empty form data initially', () => {
    const fixture = TestBed.createComponent(Contact);
    const form = fixture.componentInstance.formData;
    expect(form.name).toBe('');
    expect(form.email).toBe('');
    expect(form.company).toBe('');
    expect(form.phone).toBe('');
    expect(form.message).toBe('');
  });

  it('should not be submitting initially', () => {
    const fixture = TestBed.createComponent(Contact);
    expect(fixture.componentInstance.isSubmitting).toBe(false);
  });

  it('should not have success state initially', () => {
    const fixture = TestBed.createComponent(Contact);
    expect(fixture.componentInstance.submitSuccess).toBe(false);
  });

  it('should render the form', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.contact-form')).toBeTruthy();
  });

  it('should render 5 form fields', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    const inputs = fixture.nativeElement.querySelectorAll('.form-input, .form-textarea');
    expect(inputs.length).toBe(5);
  });

  it('should have a submit button', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.submit-btn')).toBeTruthy();
  });

  it('should call emailService.sendEmail on submit', async () => {
    const fixture = TestBed.createComponent(Contact);
    const event = new Event('submit');
    vi.spyOn(event, 'preventDefault');

    await fixture.componentInstance.onSubmit(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(emailSpy.sendEmail).toHaveBeenCalled();
  });

  it('should set submitSuccess to true after successful submit', async () => {
    const fixture = TestBed.createComponent(Contact);
    const event = new Event('submit');
    vi.spyOn(event, 'preventDefault');

    await fixture.componentInstance.onSubmit(event);

    expect(fixture.componentInstance.submitSuccess).toBe(true);
  });
});
