import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from '../../shared/contact-us/contact-us.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, ContactUsComponent, FooterComponent],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css',
})
export class StackComponent {
  stack = [
    {
      name: 'Languages',
      technologies: [
        {
          name: 'C',
          description:
            'General-purpose, imperative computer programming language.',
          useFor: 'System programming',
        },
        {
          name: 'C++',
          description:
            'General-purpose programming language with object-oriented features.',
          useFor:
            'System programming, game development, performance-critical applications',
        },
        {
          name: 'Java',
          description:
            'High-level, class-based, object-oriented programming language.',
          useFor:
            'Enterprise software, Android app development, web applications',
        },
        {
          name: 'JavaScript',
          description:
            'High-level, interpreted scripting language for web development.',
          useFor:
            'Web development, front-end development, server-side development',
        },
        {
          name: 'HTML',
          description:
            'Standard markup language for creating web pages and web applications.',
          useFor: 'Structure and content of web pages',
        },
        {
          name: 'CSS',
          description:
            'Style sheet language used for describing the presentation of a document written in HTML.',
          useFor: 'Visual styling of web pages',
        },
      ],
    },
    {
      name: 'Frameworks',
      technologies: [
        {
          name: 'Angular',
          description:
            'Platform and framework for building single-page client applications using HTML and TypeScript.',
          useFor: 'Developing robust and scalable web applications',
        },
        {
          name: 'React',
          description: 'JavaScript library for building user interfaces.',
          useFor: 'Building interactive user interfaces',
        },
        {
          name: 'Node.js',
          description:
            "JavaScript runtime built on Chrome's V8 JavaScript engine.",
          useFor: 'Server-side scripting, networking applications',
        },
      ],
    },
    {
      name: 'Databases',
      technologies: [
        {
          name: 'MongoDB',
          description:
            'NoSQL document database for storing data in JSON-like format.',
          useFor: 'Scalable, high-performance, high availability',
        },
        {
          name: 'SQL',
          description:
            'Standard language for managing and manipulating relational databases.',
          useFor: 'Data management and manipulation in relational databases',
        },
      ],
    },
    {
      name: 'Others',
      technologies: [
        {
          name: 'OOPs',
          description:
            "Paradigm based on the concept of 'objects' which contain data and methods.",
          useFor: 'Object-oriented programming',
        },
        {
          name: 'Data Structures and Algorithms',
          description:
            'Study of data structures and algorithms used in computer science.',
          useFor: 'Efficient data organization and manipulation',
        },
      ],
    },
  ];
}
