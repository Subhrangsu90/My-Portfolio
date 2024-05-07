import { Component, Input } from '@angular/core';
import { Project } from './projects.module';

@Component({
  selector: 'project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  @Input() project!: Project;
}
