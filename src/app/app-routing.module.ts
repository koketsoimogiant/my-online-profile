import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArsernalComponent } from './arsernal/arsernal.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { BioComponent } from './bio/bio.component';
import { PracticeComponent } from './practice/practice.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './blog/post/post.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'arsernal', component: ArsernalComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'bio', component: BioComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog/post', component: PostComponent },
  { path: 'social', component: SocialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
