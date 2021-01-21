import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogreadComponent } from './components/blogread/blogread.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EmailComponent } from './components/email/email.component';
import { AboutComponent } from './components/about/about.component';
import { GearComponent } from './components/gear/gear.component';
import { ResourcesComponent } from './components/resources/resources.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blogread/:blogid', component: BlogreadComponent },
  { path: 'blogpost', component: BlogpostComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'email', component: EmailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gear', component: GearComponent },
  { path: 'resources', component: ResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
