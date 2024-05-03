import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
