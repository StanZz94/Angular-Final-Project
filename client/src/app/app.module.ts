;
import { ErrorPageComponent } from './error-page/error-page.component'import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { LatestBlogComponent } from './main/latest-blog/latest-blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserModule } from './user/user.module';
import { BlogComponent } from './blog/blog.component';
import { 404Component } from './404/404.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SliderComponent,
    LatestBlogComponent,
    AboutUsComponent,
    BlogComponent,
    404Component, ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
