import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: '/home'},
  {path: 'home', component: MainComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'about', component: AboutUsComponent},
  {path: '**', redirectTo: '/404'},
  {path: '404', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
