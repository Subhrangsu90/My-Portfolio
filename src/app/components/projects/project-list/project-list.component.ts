import { Component } from '@angular/core';
import { SidenavComponent } from '../../../shared/sidenav/sidenav.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {}
