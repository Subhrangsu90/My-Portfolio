import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from '../../shared/contact-us/contact-us.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ContactUsComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private router: Router) {}
  qualifications = [
    {
      institution: 'Vidyasagar University, West Bengal',
      degree: 'Master of Science',
      field: 'Computer Science',
      cgpa: 8.86,
      passingYear: 2023,
    },
    {
      institution: 'Prabhat Kumar College, West Bengal',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      cgpa: 8.34,
      passingYear: 2021,
    },
    {
      institution: 'Barachira Prabir Banabehari High School, West Bengal',
      degree: 'Class XII',
      field: 'PCM and Biology',
      percentage: 68.4,
      passingYear: 2016,
    },
    {
      institution: 'Barachira Prabir Banabehari High School, West Bengal',
      degree: 'Class X',
      percentage: 74.14,
      passingYear: 2014,
    },
  ];
  navigateToStack() {
    this.router.navigate(['/stack']);
  }
}
