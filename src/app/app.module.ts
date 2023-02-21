import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { InteriorComponent } from './interior/interior.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '' , component: HomeComponent, pathMatch:'full'
  },
  {
    path: 'interior' , component: InteriorComponent,
  },
  {
    path: 'post' , component: PostComponent,
  },
  {
    path: 'about' , component: AboutComponent,
  },
  {
    path: 'testimonials' , component: TestimonialsComponent,
  },
  {
    path: 'contact' , component: ContactComponent,
  },
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TestimonialsComponent,
    InteriorComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
