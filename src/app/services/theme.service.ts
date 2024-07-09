import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.detectSystemTheme();
    }
  }

  private detectSystemTheme(): void {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
    prefersDarkScheme.addEventListener('change', (e) => {
      if (e.matches) {
        this.setDarkTheme();
      } else {
        this.setLightTheme();
      }
    });
  }

  setDarkTheme(): void {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  setLightTheme(): void {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  toggleTheme(): void {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }
}
