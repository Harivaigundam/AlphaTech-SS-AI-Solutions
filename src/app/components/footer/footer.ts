import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  showToast = false;
  showPricing = false;

  showConnectToast(event: Event) {
    event.preventDefault();
    this.showToast = true;
  }

  showPricingToast(event: Event) {
    event.preventDefault();
    this.showPricing = true;
  }

  hideToast() {
    this.showToast = false;
  }

  hidePricing() {
    this.showPricing = false;
  }
}
