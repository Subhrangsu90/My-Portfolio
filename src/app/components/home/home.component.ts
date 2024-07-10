import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { Router } from '@angular/router';

import { ProjectComponent } from '../../shared/project/project.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ContactUsComponent } from '../../shared/contact-us/contact-us.component';
import { Project } from '../../shared/project/projects.module';
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
  dummyProject: any;

  constructor(private router: Router) {
    this.dummyProject = [
      {
        id: 1,
        title: 'Awesome Project 1',
        category: 'Web Development',
        imageUrl: '../../../../assets/images/coming-soon.jpg',
      },
      {
        id: 2,
        title: 'Awesome Project 2',
        category: 'Mobile App Development',
        imageUrl: '../../../../assets/images/coming-soon.jpg',
      },
      // {
      //   id: 3,
      //   title: 'Awesome Project 3',
      //   category: 'Mobile App Development',
      //   imageUrl: '../../../../assets/images/CSSUnits.png',
      // },
      // {
      //   id: 4,
      //   title: 'Awesome Project 4',
      //   category: 'Mobile App Development',
      //   imageUrl: '../../../../assets/images/CSSUnits.png',
      // },
    ];
  }

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
