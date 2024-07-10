import { Component } from '@angular/core';
import { ContactUsComponent } from '../../../shared/contact-us/contact-us.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from '../../../shared/project/project.component';
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    CommonModule,
    ContactUsComponent,
    FooterComponent,
    ProjectComponent,
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  dummyProjects: any;

  constructor(private router: Router) {
    this.dummyProjects = [
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
      {
        id: 3,
        title: 'Awesome Project 3',
        category: 'Mobile App Development',
        imageUrl: '../../../../assets/images/coming-soon.jpg',
      },
      {
        id: 4,
        title: 'Awesome Project 4',
        category: 'Mobile App Development',
        imageUrl: '../../../../assets/images/coming-soon.jpg',
      },
    ];
  }
}
