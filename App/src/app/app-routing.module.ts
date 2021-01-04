import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogreadComponent } from './components/blogread/blogread.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blogread/:blogid', component: BlogreadComponent },
  { path: 'blogpost', component: BlogpostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
