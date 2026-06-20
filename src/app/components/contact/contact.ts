import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Email, ContactFormData } from '../../services/email';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  formData: ContactFormData = {
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;

  constructor(private emailService: Email) {}

  async onSubmit(event: Event) {
    event.preventDefault();

    if (this.isSubmitting) return;

    this.isSubmitting = true;

    try {
      await this.emailService.sendEmail(this.formData);
      this.submitSuccess = true;

      // Reset form after success
      setTimeout(() => {
        this.formData = {
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        };
        this.submitSuccess = false;
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
}
