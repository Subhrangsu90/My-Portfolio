import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css',
})
export class StackComponent {}
