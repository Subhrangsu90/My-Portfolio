import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'sidenav',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, FormsModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  providers: [DatePipe],
})
export class SidenavComponent {
  isSidebarOpen: boolean = false;
  currentDate: string = '';
  currentTime: string = '';
  showPopover = false;
  popoverStyle = {};

  private router = inject(Router);
  private datePipe = inject(DatePipe);

  constructor() {}

  showDateTime(event: MouseEvent): void {
    const now = new Date();
    this.currentDate =
      this.datePipe.transform(now, 'EEEE, dd MMMM, yyyy') || '';
    this.currentTime = this.datePipe.transform(now, 'hh:mm a') || '';

    this.showPopover = true;
  }

  hideDateTime(): void {
    this.showPopover = false;
    this.popoverStyle = {
      display: 'none',
    };
  }

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
