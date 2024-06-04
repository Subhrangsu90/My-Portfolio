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
    this.isSidebarOpen = false;
  }
  navigateTo(route: string) {
    this.router.navigateByUrl(route);
    this.closeSidebar();
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/Subhrangsu Bera_CV.pdf';
    link.download = 'Subhrangsu Bera_CV.pdf';
    link.click();
  }
}
