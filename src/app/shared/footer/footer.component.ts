import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  currentYear?: number;
  authorName: string = 'Subhrangsu';

  constructor() {}

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
