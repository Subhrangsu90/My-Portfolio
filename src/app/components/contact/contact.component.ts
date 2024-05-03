import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
