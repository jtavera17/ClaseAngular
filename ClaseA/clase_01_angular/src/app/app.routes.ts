import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecuperationComponent } from './recuperation/recuperation.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'recuperation', component: RecuperationComponent},
    {path: 'home', component: HomeComponent}




];
