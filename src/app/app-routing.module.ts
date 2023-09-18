import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArsernalComponent } from './arsernal/arsernal.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { BioComponent } from './bio/bio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'arsernal', component: ArsernalComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'bio', component: BioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
