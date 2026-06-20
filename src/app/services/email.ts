import { Injectable } from '@angular/core';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class Email {
  private readonly recipientEmail = 'muthukanagasangeetha2000@gmail.com';

  async sendEmail(data: ContactFormData): Promise<boolean> {
    // Build the mailto link
    const subject = encodeURIComponent(`New Contact Form Submission from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Company: ${data.company}\n` +
      `Phone: ${data.phone}\n\n` +
      `Message:\n${data.message}`
    );

    const mailtoLink = `mailto:${this.recipientEmail}?subject=${subject}&body=${body}`;

    // Open email client directly
    window.location.href = mailtoLink;

    // Return success after brief delay to allow the mailto to process
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 300);
    });
  }
}
