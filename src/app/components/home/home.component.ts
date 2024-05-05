import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { Router } from '@angular/router';
import { ProjectComponent } from '../../shared/project/project.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ContactUsComponent } from '../../shared/contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgxTypedJsModule,
    ProjectComponent,
    FooterComponent,
    ContactUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/about']);
  }

  navigateToProject() {
    this.router.navigate(['/projects']);
  }

  navigateToStack() {
    this.router.navigate(['/stack']);
  }

  navigateToBlog() {
    this.router.navigate(['/blogs']);
  }
}
