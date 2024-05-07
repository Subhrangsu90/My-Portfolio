import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'sidenav',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, FormsModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  constructor(private router: Router) {}

  isSidebarOpen: boolean = false;

  // toggleSidebar() {
  //   if (this.isSidebarOpen) {
  //     console.log('close', this.isSidebarOpen);
  //     this.isSidebarOpen = false;
  //   } else {
  //     console.log('open', this.isSidebarOpen);
  //     this.isSidebarOpen = true;
  //   }
  // }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
