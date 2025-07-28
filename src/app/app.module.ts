import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { ArsernalComponent } from './arsernal/arsernal.component';
import { BioComponent } from './bio/bio.component';
import { PracticeComponent } from './practice/practice.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';

import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './nav/menu/menu.component';
import { PostComponent } from './blog/post/post.component';
import { SocialComponent } from './social/social.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BlogComponent,
    ProjectsComponent,
    ArsernalComponent,
    BioComponent,
    PracticeComponent,
    ConfirmModalComponent,
    ContactComponent,
    MenuComponent,
    PostComponent,
    SocialComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
