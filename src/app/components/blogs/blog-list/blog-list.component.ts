import { Component } from '@angular/core';
import { SidenavComponent } from '../../../shared/sidenav/sidenav.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent {}
