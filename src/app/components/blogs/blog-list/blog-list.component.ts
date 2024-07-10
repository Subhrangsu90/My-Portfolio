import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { ContactUsComponent } from '../../../shared/contact-us/contact-us.component';
import { ProjectComponent } from '../../../shared/project/project.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    ContactUsComponent,
    ProjectComponent,
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent {
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
