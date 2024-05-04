import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
}
