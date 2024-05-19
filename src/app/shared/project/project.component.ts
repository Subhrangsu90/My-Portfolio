import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Project } from './projects.module';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  @Input() project!: Project;
  @ViewChild('shine')
  shine!: ElementRef;
  @ViewChild('projectcard') content!: ElementRef;

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector('.project-card') as any);
  }

  constructor(private renderer: Renderer2) {}

  handleMouseMove(event: MouseEvent) {
    const contentRect = this.content.nativeElement.getBoundingClientRect();
    const contentOffsetLeft = contentRect.left + window.pageXOffset;
    const contentOffsetTop = contentRect.top + window.pageYOffset;

    const posX = event.clientX - contentOffsetLeft - 100;
    const posY = event.clientY - contentOffsetTop - 100;
    this.shine.nativeElement.style.left = `${posX}px`;
    this.shine.nativeElement.style.top = `${posY}px`;
  }
}
