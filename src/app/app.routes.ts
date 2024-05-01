import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogListComponent } from './components/blogs/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blogs/blog-details/blog-details.component';
import { StackComponent } from './components/stack/stack.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  {
    path: 'projects',
    component: ProjectListComponent,
    title: 'Projects',
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent,
    title: 'Project Details',
  },
  { path: 'stack', component: StackComponent, title: 'Stack' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'blogs', component: BlogListComponent, title: 'Blogs' },
  {
    path: 'blogs/:id',
    component: BlogDetailsComponent,
    title: 'Blog Details',
  },
  {
    path: '404',
    component: NotFoundComponent,
    title: 'Page Not Found',
  },

  { path: '**', redirectTo: '/404' },
];
