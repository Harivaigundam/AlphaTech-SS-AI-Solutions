import { TestBed } from '@angular/core/testing';
import { Email } from './email';
import { vi } from 'vitest';

describe('Email', () => {
  let service: Email;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Email);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send email via mailto link', async () => {
    const mockLocation = { href: '' };
    vi.spyOn(window, 'location', 'get').mockReturnValue(mockLocation as Location);

    const result = await service.sendEmail({
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Acme Corp',
      phone: '+1 555 1234',
      message: 'Test message'
    });

    expect(result).toBe(true);
    expect(mockLocation.href).toContain('mailto:');
    expect(mockLocation.href).toContain('John%20Doe');
  });

  it('should return true after sending', async () => {
    vi.spyOn(window, 'location', 'get').mockReturnValue({ href: '' } as Location);

    const result = await service.sendEmail({
      name: 'Test',
      email: 'test@test.com',
      company: '',
      phone: '',
      message: 'Hello'
    });

    expect(result).toBe(true);
  });
});
