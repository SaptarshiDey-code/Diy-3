import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BRegisterComponent } from './bregister/bregister.component';
import { BloginComponent } from './blogin/blogin.component';
import { LoginsComponent } from './logins/logins.component';



const routes: Routes = [
  {
    path: 'logins',
    component: LoginsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },{
    path:'login',
    component:LoginComponent
  },{
    path:'register',
    component:RegisterComponent
  },{
    path:'bregister',
    component:BRegisterComponent
  },
{
  path:'blogin',
  component:BloginComponent
},{
  path: '**',
  component: HomeComponent
}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
