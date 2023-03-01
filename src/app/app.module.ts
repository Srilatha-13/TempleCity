import { AppHttpService } from './services/app-http.service';
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

import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { signinComponent } from './signin/signin.component';
import { AuthService } from './shared/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from 'src/environments/environments';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import {initializeApp , provideFirebaseApp} from '@angular/fire/app' 


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
  {
    path: 'signin' , component: signinComponent,
  },
  {
    path: 'register' , component: RegisterComponent,
  },
  {
    path: 'forgot-password' , component: ForgotPasswordComponent ,
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
    PostComponent,
    RegisterComponent,
    signinComponent,
    ForgotPasswordComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(
      firebaseConfig
    )
  ],
   providers: [AuthService,AppHttpService],
   bootstrap: [AppComponent],
  
})
export class AppModule { }
