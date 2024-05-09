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

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  closeSidebar() {
    this.isSidebarOpen = false; // Close the navbar
  }
  navigateTo(route: string) {
    this.router.navigateByUrl(route); // Navigate to the specified route
    this.closeSidebar(); // Close the navbar after navigation
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
