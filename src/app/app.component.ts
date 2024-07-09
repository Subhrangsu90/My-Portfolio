import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../app/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'My-Portfolio';
  showNavbar: boolean = true;
  isDarkMode = false;

  private themeService = inject(ThemeService);
  private router = inject(Router);
  private renderer = inject(Renderer2);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.hideSplashScreen();
    }
    // this.generateBubbles();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the 404 page
        this.showNavbar = !event.urlAfterRedirects.includes('404');
      }
    });
    if (isPlatformBrowser(this.platformId)) {
      this.updateThemeState();
    }
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.themeService.toggleTheme();
      this.updateThemeState();
    }
  }

  updateThemeState(): void {
    if (isPlatformBrowser(this.platformId)) {
      const theme = document.documentElement.getAttribute('data-theme');
      this.isDarkMode = theme === 'dark';
    }
  }

  hideSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
      // splashScreen.classList.add('hidden');
      setTimeout(() => {
        splashScreen.style.display = 'none';
      }, 5000);
    }
  }
  generateBubbles(): void {
    const bubbleContainer = this.renderer.selectRootElement('.bubbles');
    const bubbleCount = 20; // Number of bubbles

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = this.renderer.createElement('div');
      this.renderer.addClass(bubble, 'bubble');
      const size = 20 + Math.random() * 110;
      const gradientColor = this.getRandomGradient();
      const xPos = Math.random() * 95;
      const yPos = Math.random() * 200;
      const delay = Math.random() * 20;
      const duration = 15 + Math.random() * 10;

      this.renderer.setStyle(bubble, 'left', `${xPos}%`);
      this.renderer.setStyle(bubble, 'top', `${yPos}%`);
      this.renderer.setStyle(bubble, 'width', `${size}px`);
      this.renderer.setStyle(bubble, 'height', `${size}px`);
      this.renderer.setStyle(bubble, 'background', gradientColor);
      this.renderer.setStyle(bubble, 'animationDelay', `${delay}s`);
      this.renderer.setStyle(bubble, 'animationDuration', `${duration}s`);
      this.renderer.appendChild(bubbleContainer, bubble);
    }
  }
  getRandomGradient(): string {
    const colors = [
      '#7b00ff', // Purple
      '#00ffdd', // Cyan
      '#ff0061', // Magenta
      '#ff5e00', // Orange
      '#00c5ff', // Blue
      '#ffdc00', // Yellow
      '#ff00e1', // Pink
      '#00ff9d', // Green
      '#ff5722', // Deep Orange
      '#795548', // Brown
      '#9c27b0', // Deep Purple
      '#673ab7', // Dark Violet
      '#3f51b5', // Indigo
      '#00bcd4', // Light Blue
      '#8bc34a', // Light Green
      '#009688', // Teal
      '#f44336', // Red
      '#e91e63', // Pink Red
      '#4caf50', // Green
      '#ff9800', // Amber
      '#2196f3', // Blue
      '#ffc107', // Yellow Amber
      '#03a9f4', // Light Blue
      '#ff5722', // Deep Orange
      '#673ab7', // Dark Violet
      '#00bcd4', // Light Blue
    ];
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    const color3 = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;
  }
}
