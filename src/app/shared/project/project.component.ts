import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Project } from './projects.module';
import VanillaTilt from 'vanilla-tilt';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() project!: Project;
  @ViewChild('shine') shine!: ElementRef;
  @ViewChild('projectcard') content!: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      VanillaTilt.init(document.querySelector('.project-card') as any);
    }
  }

  handleMouseMove(event: MouseEvent): void {
    if (isPlatformBrowser(this.platformId)) {
      const contentRect = this.content.nativeElement.getBoundingClientRect();
      const contentOffsetLeft = contentRect.left + window.pageXOffset;
      const contentOffsetTop = contentRect.top + window.pageYOffset;

      const posX = event.clientX - contentOffsetLeft - 100;
      const posY = event.clientY - contentOffsetTop - 100;
      this.shine.nativeElement.style.left = `${posX}px`;
      this.shine.nativeElement.style.top = `${posY}px`;
    }
  }
}
