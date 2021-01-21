//NPM Packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CKEditorModule } from 'ckeditor4-angular';
//Routing
import { AppRoutingModule } from './app-routing.module';
//Style Themes
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Services
import { BlogService } from './services/blog.service';
import { AdminService } from './services/admin.service';
import { EmailService } from './services/email.service';
//Pipes
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogreadComponent } from './components/blogread/blogread.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EmailComponent } from './components/email/email.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BlogreadComponent,
    BlogpostComponent,
    SafeHTMLPipe,
    GalleryComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BlogService, AdminService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
