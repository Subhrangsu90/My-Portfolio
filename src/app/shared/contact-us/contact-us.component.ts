import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  constructor(private router: Router) {}

  navigateToContactUs() {
    this.router.navigate(['/contact']);
  }
}
